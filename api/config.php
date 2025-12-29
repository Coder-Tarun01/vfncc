<?php
// Configuration file for PHP API

// Enable error reporting (disable in production)
error_reporting(E_ALL);
ini_set('display_errors', 0);

// Set timezone
date_default_timezone_set('UTC');

// CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Base paths
define('ROOT_PATH', dirname(__DIR__));
define('DATA_PATH', ROOT_PATH . '/data');
define('UPLOADS_PATH', ROOT_PATH . '/uploads');

// Helper function to get base path from REQUEST_URI (for subdirectory deployment)
function getBasePath() {
    $requestUri = $_SERVER['REQUEST_URI'] ?? '';
    
    // Extract the path before /api/ (e.g., /vfncc/api/auth/login -> /vfncc)
    if (preg_match('#(/[^/]+)/api/#', $requestUri, $matches)) {
        return $matches[1];
    }
    
    // If no subdirectory found, return empty string (root deployment)
    return '';
}

// Helper function to get clean host (without ports)
function getCleanHost() {
    // Prefer SERVER_NAME as it's the server's hostname (doesn't include ports)
    $host = $_SERVER['SERVER_NAME'] ?? 'localhost';
    
    // If SERVER_NAME is not available or is empty, try HTTP_HOST but strip port
    if (empty($host) || $host === 'localhost') {
        $httpHost = $_SERVER['HTTP_HOST'] ?? '';
        if (!empty($httpHost)) {
            // Remove port from HTTP_HOST
            $host = preg_replace('#:\d+$#', '', $httpHost);
        }
    }
    
    return $host ?: 'localhost';
}

// JWT Secret (change this in production!)
define('JWT_SECRET', 'your-secret-key-change-this-in-production');

// Create directories if they don't exist
if (!file_exists(DATA_PATH)) {
    mkdir(DATA_PATH, 0755, true);
}
if (!file_exists(UPLOADS_PATH)) {
    mkdir(UPLOADS_PATH, 0755, true);
}

// Helper function to send JSON response
function sendJson($data, $statusCode = 200) {
    http_response_code($statusCode);
    echo json_encode($data);
    exit();
}

// Helper function to get request body
function getRequestBody() {
    $body = file_get_contents('php://input');
    return json_decode($body, true);
}

// Helper function to get authorization token
function getAuthToken() {
    $headers = getallheaders();
    if (isset($headers['Authorization'])) {
        $authHeader = $headers['Authorization'];
        if (preg_match('/Bearer\s+(.*)$/i', $authHeader, $matches)) {
            return $matches[1];
        }
    }
    return null;
}

// Simple JWT implementation
function generateJWT($payload) {
    $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);
    $payload['exp'] = time() + (24 * 60 * 60); // 24 hours
    $payload = json_encode($payload);
    
    $base64UrlHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));
    $base64UrlPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payload));
    
    $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, JWT_SECRET, true);
    $base64UrlSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));
    
    return $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;
}

function verifyJWT($token) {
    $parts = explode('.', $token);
    if (count($parts) !== 3) {
        return null;
    }
    
    list($base64UrlHeader, $base64UrlPayload, $base64UrlSignature) = $parts;
    
    $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, JWT_SECRET, true);
    $base64UrlSignatureCheck = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));
    
    if ($base64UrlSignature !== $base64UrlSignatureCheck) {
        return null;
    }
    
    $payload = json_decode(base64_decode(str_replace(['-', '_'], ['+', '/'], $base64UrlPayload)), true);
    
    if (isset($payload['exp']) && $payload['exp'] < time()) {
        return null;
    }
    
    return $payload;
}

// Authentication middleware
function requireAuth() {
    $token = getAuthToken();
    if (!$token) {
        sendJson(['error' => 'Access token required'], 401);
    }
    
    $user = verifyJWT($token);
    if (!$user) {
        sendJson(['error' => 'Invalid or expired token'], 403);
    }
    
    return $user;
}

