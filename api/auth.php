<?php
require_once 'config.php';

// Get request method
$method = $_SERVER['REQUEST_METHOD'];

// Route handling
switch ($method) {
    case 'POST':
        $action = $_GET['action'] ?? '';
        
        if ($action === 'register') {
            handleRegister();
        } elseif ($action === 'login') {
            handleLogin();
        } else {
            sendJson(['error' => 'Invalid action'], 400);
        }
        break;
    
    default:
        sendJson(['error' => 'Method not allowed'], 405);
        break;
}

function handleRegister() {
    $data = getRequestBody();
    
    $username = $data['username'] ?? '';
    $email = $data['email'] ?? '';
    $password = $data['password'] ?? '';
    
    // Validation
    if (empty($username) || empty($email) || empty($password)) {
        sendJson(['error' => 'All fields are required'], 400);
    }
    
    if (strlen($password) < 6) {
        sendJson(['error' => 'Password must be at least 6 characters'], 400);
    }
    
    // Load users
    $usersFile = DATA_PATH . '/users.json';
    $users = [];
    if (file_exists($usersFile)) {
        $users = json_decode(file_get_contents($usersFile), true) ?? [];
    }
    
    // Check if user exists
    foreach ($users as $user) {
        if ($user['username'] === $username || $user['email'] === $email) {
            sendJson(['error' => 'Username or email already exists'], 400);
        }
    }
    
    // Create new user
    $newUser = [
        'id' => count($users) > 0 ? max(array_column($users, 'id')) + 1 : 1,
        'username' => $username,
        'email' => $email,
        'password' => password_hash($password, PASSWORD_DEFAULT),
        'created_at' => date('Y-m-d H:i:s')
    ];
    
    $users[] = $newUser;
    
    // Save users
    file_put_contents($usersFile, json_encode($users, JSON_PRETTY_PRINT));
    
    // Generate token
    $token = generateJWT([
        'id' => $newUser['id'],
        'username' => $username,
        'email' => $email
    ]);
    
    sendJson([
        'message' => 'User registered successfully',
        'token' => $token,
        'user' => [
            'id' => $newUser['id'],
            'username' => $username,
            'email' => $email
        ]
    ], 201);
}

function handleLogin() {
    $data = getRequestBody();
    
    $email = $data['email'] ?? '';
    $password = $data['password'] ?? '';
    
    // Validation
    if (empty($email) || empty($password)) {
        sendJson(['error' => 'Email and password are required'], 400);
    }
    
    // Load users
    $usersFile = DATA_PATH . '/users.json';
    if (!file_exists($usersFile)) {
        sendJson(['error' => 'Invalid credentials'], 401);
    }
    
    $users = json_decode(file_get_contents($usersFile), true) ?? [];
    
    // Find user
    $user = null;
    foreach ($users as $u) {
        if ($u['email'] === $email) {
            $user = $u;
            break;
        }
    }
    
    if (!$user) {
        sendJson(['error' => 'Invalid credentials'], 401);
    }
    
    // Verify password
    if (!password_verify($password, $user['password'])) {
        sendJson(['error' => 'Invalid credentials'], 401);
    }
    
    // Generate token
    $token = generateJWT([
        'id' => $user['id'],
        'username' => $user['username'],
        'email' => $user['email']
    ]);
    
    sendJson([
        'message' => 'Login successful',
        'token' => $token,
        'user' => [
            'id' => $user['id'],
            'username' => $user['username'],
            'email' => $user['email']
        ]
    ]);
}

