<?php
// API Router - handles all API requests
require_once 'config.php';

$requestUri = $_SERVER['REQUEST_URI'];
$requestMethod = $_SERVER['REQUEST_METHOD'];

// Remove query string and base path
$path = parse_url($requestUri, PHP_URL_PATH);
// Remove /vfncc/api or /api to get clean path
$path = preg_replace('#/vfncc/api|/api#', '', $path, 1);
$path = trim($path, '/');

// Route to appropriate handler
if (strpos($path, 'auth/') === 0) {
    // Extract action from path
    $action = str_replace('auth/', '', $path);
    if (empty($action) && $requestMethod === 'POST') {
        // Check request body for action hint or use default
        $action = 'login'; // Default to login for POST /api/auth
    }
    $_GET['action'] = $action;
    require_once 'auth.php';
} elseif (strpos($path, 'media/') === 0) {
    // Extract action from path
    $parts = explode('/', $path);
    if (count($parts) >= 2) {
        $action = $parts[1];
        if ($action === 'public' && isset($parts[2])) {
            $action = 'public-' . $parts[2]; // public-images or public-media
        } elseif (is_numeric($action) && $requestMethod === 'DELETE') {
            // DELETE /api/media/123
            $_GET['id'] = $action;
            $action = 'delete';
        }
        $_GET['action'] = $action;
    }
    require_once 'media.php';
} else {
    sendJson(['error' => 'Invalid API endpoint'], 404);
}

