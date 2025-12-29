<?php
require_once 'config.php';

// Get request method
$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'] ?? '';

// Route handling
switch ($method) {
    case 'POST':
        if ($action === 'upload') {
            handleUpload();
        } else {
            sendJson(['error' => 'Invalid action'], 400);
        }
        break;
    
    case 'GET':
        if ($action === 'all') {
            handleGetAll();
        } elseif ($action === 'public-images' || $action === 'public/images') {
            handleGetPublicImages();
        } elseif ($action === 'public-media' || $action === 'public/media') {
            handleGetPublicMedia();
        } else {
            sendJson(['error' => 'Invalid action'], 400);
        }
        break;
    
    case 'DELETE':
        $id = $_GET['id'] ?? '';
        if ($id) {
            handleDelete($id);
        } else {
            sendJson(['error' => 'Media ID required'], 400);
        }
        break;
    
    default:
        sendJson(['error' => 'Method not allowed'], 405);
        break;
}

function handleUpload() {
    // Require authentication
    $user = requireAuth();
    
    if (!isset($_FILES['file'])) {
        sendJson(['error' => 'No file uploaded'], 400);
    }
    
    $file = $_FILES['file'];
    
    // Check for upload errors
    if ($file['error'] !== UPLOAD_ERR_OK) {
        $errorMessages = [
            UPLOAD_ERR_INI_SIZE => 'File exceeds upload_max_filesize',
            UPLOAD_ERR_FORM_SIZE => 'File exceeds MAX_FILE_SIZE',
            UPLOAD_ERR_PARTIAL => 'File was only partially uploaded',
            UPLOAD_ERR_NO_FILE => 'No file was uploaded',
            UPLOAD_ERR_NO_TMP_DIR => 'Missing temporary folder',
            UPLOAD_ERR_CANT_WRITE => 'Failed to write file to disk',
            UPLOAD_ERR_EXTENSION => 'File upload stopped by extension'
        ];
        sendJson(['error' => $errorMessages[$file['error']] ?? 'Unknown upload error'], 400);
    }
    
    // Check file size (50GB limit)
    $maxSize = 50 * 1024 * 1024 * 1024; // 50GB
    if ($file['size'] > $maxSize) {
        sendJson(['error' => 'File too large. Maximum size is 50GB.'], 400);
    }
    
    // Validate file type
    $allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 
                     'video/mp4', 'video/mov', 'video/avi', 'application/pdf'];
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mimeType = finfo_file($finfo, $file['tmp_name']);
    finfo_close($finfo);
    
    if (!in_array($mimeType, $allowedTypes)) {
        sendJson(['error' => 'Only image, video, and PDF files are allowed'], 400);
    }
    
    // Generate unique filename
    $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
    $filename = time() . '-' . mt_rand(100000000, 999999999) . '.' . $extension;
    $destination = UPLOADS_PATH . '/' . $filename;
    
    // Move uploaded file
    if (!move_uploaded_file($file['tmp_name'], $destination)) {
        sendJson(['error' => 'Failed to save file'], 500);
    }
    
    // Determine file type
    $fileType = 'other';
    if (strpos($mimeType, 'image/') === 0) {
        $fileType = 'image';
    } elseif (strpos($mimeType, 'video/') === 0) {
        $fileType = 'video';
    } elseif ($mimeType === 'application/pdf') {
        $fileType = 'pdf';
    }
    
    // Load media
    $mediaFile = DATA_PATH . '/media.json';
    $media = [];
    if (file_exists($mediaFile)) {
        $media = json_decode(file_get_contents($mediaFile), true) ?? [];
    }
    
    // Store filepath as relative path (for filesystem access)
    // Base path will be prepended when generating URLs
    $filepath = '/uploads/' . $filename;
    
    // Create media entry
    $newMedia = [
        'id' => count($media) > 0 ? max(array_column($media, 'id')) + 1 : 1,
        'filename' => $filename,
        'original_filename' => $file['name'],
        'filepath' => $filepath,
        'file_type' => $fileType,
        'file_size' => $file['size'],
        'uploaded_by' => $user['id'],
        'uploaded_at' => date('Y-m-d H:i:s')
    ];
    
    $media[] = $newMedia;
    
    // Save media
    file_put_contents($mediaFile, json_encode($media, JSON_PRETTY_PRINT));
    
    sendJson([
        'message' => 'File uploaded successfully',
        'media' => [
            'id' => $newMedia['id'],
            'filename' => $newMedia['filename'],
            'original_filename' => $newMedia['original_filename'],
            'filepath' => $newMedia['filepath'],
            'file_type' => $newMedia['file_type'],
            'file_size' => $newMedia['file_size']
        ]
    ], 201);
}

function handleGetAll() {
    // Require authentication
    $user = requireAuth();
    
    // Load media and users
    $mediaFile = DATA_PATH . '/media.json';
    $usersFile = DATA_PATH . '/users.json';
    
    $media = [];
    if (file_exists($mediaFile)) {
        $media = json_decode(file_get_contents($mediaFile), true) ?? [];
    }
    
    $users = [];
    if (file_exists($usersFile)) {
        $users = json_decode(file_get_contents($usersFile), true) ?? [];
    }
    
    // Create user lookup
    $userLookup = [];
    foreach ($users as $u) {
        $userLookup[$u['id']] = $u['username'];
    }
    
    // Add uploaded_by_name and URL
    $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http';
    $host = getCleanHost();
    $basePath = getBasePath();
    
    foreach ($media as &$item) {
        $item['uploaded_by_name'] = $userLookup[$item['uploaded_by']] ?? 'Unknown';
        // Prepend base path to filepath when generating URL
        $item['url'] = $protocol . '://' . $host . $basePath . $item['filepath'];
    }
    
    // Sort by uploaded_at descending
    usort($media, function($a, $b) {
        return strtotime($b['uploaded_at']) - strtotime($a['uploaded_at']);
    });
    
    sendJson($media);
}

function handleGetPublicImages() {
    // Load media
    $mediaFile = DATA_PATH . '/media.json';
    $media = [];
    if (file_exists($mediaFile)) {
        $media = json_decode(file_get_contents($mediaFile), true) ?? [];
    }
    
    // Filter images only
    $images = array_filter($media, function($item) {
        return $item['file_type'] === 'image';
    });
    
    // Get base URL
    $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http';
    $host = getCleanHost();
    $basePath = getBasePath();
    $baseUrl = $protocol . '://' . $host;
    
    // Format response
    $result = [];
    foreach ($images as $item) {
        $result[] = [
            'id' => $item['id'],
            'src' => $baseUrl . $basePath . $item['filepath'],
            'alt' => $item['original_filename'],
            'caption' => preg_replace('/\.[^/.]+$/', '', str_replace(['-', '_'], ' ', $item['original_filename']))
        ];
    }
    
    // Sort by uploaded_at descending
    usort($result, function($a, $b) use ($images) {
        $aTime = strtotime(array_values(array_filter($images, function($item) use ($a) {
            return $item['id'] === $a['id'];
        }))[0]['uploaded_at']);
        $bTime = strtotime(array_values(array_filter($images, function($item) use ($b) {
            return $item['id'] === $b['id'];
        }))[0]['uploaded_at']);
        return $bTime - $aTime;
    });
    
    sendJson($result);
}

function handleGetPublicMedia() {
    // Load media
    $mediaFile = DATA_PATH . '/media.json';
    $media = [];
    if (file_exists($mediaFile)) {
        $media = json_decode(file_get_contents($mediaFile), true) ?? [];
    }
    
    // Filter images and videos
    $mediaItems = array_filter($media, function($item) {
        return in_array($item['file_type'], ['image', 'video']);
    });
    
    // Get base URL
    $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http';
    $host = getCleanHost();
    $basePath = getBasePath();
    $baseUrl = $protocol . '://' . $host;
    
    // Format response
    $result = [];
    foreach ($mediaItems as $item) {
        $result[] = [
            'id' => $item['id'],
            'src' => $baseUrl . $basePath . $item['filepath'],
            'alt' => $item['original_filename'],
            'type' => $item['file_type'],
            'caption' => preg_replace('/\.[^/.]+$/', '', str_replace(['-', '_'], ' ', $item['original_filename']))
        ];
    }
    
    // Sort by uploaded_at descending
    usort($result, function($a, $b) use ($mediaItems) {
        $aTime = strtotime(array_values(array_filter($mediaItems, function($item) use ($a) {
            return $item['id'] === $a['id'];
        }))[0]['uploaded_at']);
        $bTime = strtotime(array_values(array_filter($mediaItems, function($item) use ($b) {
            return $item['id'] === $b['id'];
        }))[0]['uploaded_at']);
        return $bTime - $aTime;
    });
    
    sendJson($result);
}

function handleDelete($id) {
    // Require authentication
    $user = requireAuth();
    
    // Load media
    $mediaFile = DATA_PATH . '/media.json';
    if (!file_exists($mediaFile)) {
        sendJson(['error' => 'Media not found'], 404);
    }
    
    $media = json_decode(file_get_contents($mediaFile), true) ?? [];
    
    // Find and remove media
    $found = false;
    $mediaToDelete = null;
    foreach ($media as $key => $item) {
        if ($item['id'] == $id) {
            $mediaToDelete = $item;
            unset($media[$key]);
            $found = true;
            break;
        }
    }
    
    if (!$found) {
        sendJson(['error' => 'Media not found'], 404);
    }
    
    // Delete file from filesystem
    $filePath = ROOT_PATH . $mediaToDelete['filepath'];
    if (file_exists($filePath)) {
        unlink($filePath);
    }
    
    // Save updated media
    $media = array_values($media); // Re-index array
    file_put_contents($mediaFile, json_encode($media, JSON_PRETTY_PRINT));
    
    sendJson(['message' => 'Media deleted successfully']);
}

