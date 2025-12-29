# Backend API Review Summary

## Overview
Your backend consists of a PHP-based API with JSON file storage. The API handles authentication (JWT) and media management.

## API Structure

### Files
- `api/config.php` - Configuration, helpers, and JWT functions
- `api/index.php` - API router (handles routing)
- `api/auth.php` - Authentication endpoints (register, login)
- `api/media.php` - Media management endpoints (upload, get, delete)

### Configuration Files
- `.htaccess` - Apache routing rules for API endpoints
- `data/users.json` - User data storage
- `data/media.json` - Media metadata storage
- `uploads/` - Physical file storage

## API Endpoints

### Authentication (POST)
- `/api/auth/register` - Register new user
- `/api/auth/login` - Login and get JWT token

### Media (Requires Authentication)
- `POST /api/media/upload` - Upload file (images, videos, PDFs)
- `GET /api/media/all` - Get all media with metadata
- `DELETE /api/media/{id}` - Delete media file

### Public Media (No Authentication)
- `GET /api/media/public/images` - Get all public images
- `GET /api/media/public/media` - Get all public images and videos

## Recent Fixes Applied

### 1. Frontend API Base URL
- **Fixed**: Updated `frontend/src/utils/api.js` to use base path from Vite config
- **Result**: API calls now correctly use `/vfncc/api` when deployed in subdirectory

### 2. Backend File Path URLs
- **Fixed**: Added `getBasePath()` function in `api/config.php` to detect subdirectory
- **Fixed**: Updated `api/media.php` to include subdirectory in filepath for new uploads
- **Result**: Uploaded files now have correct URLs like `/vfncc/uploads/filename.jpg`

### 3. API Routing
- **Fixed**: Updated `api/index.php` to handle subdirectory paths correctly
- **Result**: API routing works correctly in both root and subdirectory deployments

## Current Status

✅ **Working Correctly:**
- API routing via `.htaccess`
- Authentication (JWT tokens)
- File upload functionality
- File storage in `uploads/` directory
- JSON data storage in `data/` directory
- CORS headers configured
- Error handling in place

✅ **Recent Improvements:**
- Subdirectory deployment support
- Correct API base URLs in frontend
- Correct file path URLs in backend responses

## Configuration Notes

1. **JWT Secret**: Currently set to default value. Should be changed in production:
   ```php
   define('JWT_SECRET', 'your-secret-key-change-this-in-production');
   ```

2. **File Upload Limits**: Check PHP settings in `php.ini`:
   - `upload_max_filesize` (currently 100MB in code)
   - `post_max_size`
   - `max_execution_time`

3. **Directory Permissions**: Ensure `data/` and `uploads/` directories are writable:
   - `data/` - needs write permission for JSON files
   - `uploads/` - needs write permission for uploaded files

## Testing Recommendations

1. Test API endpoints:
   - Register a user
   - Login and verify JWT token
   - Upload a file
   - Get all media
   - Delete a file
   - Access public images/media

2. Verify file paths:
   - Check uploaded files are accessible at correct URLs
   - Verify subdirectory paths work correctly

3. Test error handling:
   - Invalid credentials
   - Missing authentication token
   - File upload errors
   - Invalid endpoints

## Security Considerations

1. ✅ JSON files in `data/` are protected via `.htaccess` (not directly accessible)
2. ✅ JWT authentication for protected endpoints
3. ✅ File type validation on upload
4. ✅ File size limits enforced
5. ⚠️ **TODO**: Change JWT_SECRET in production
6. ⚠️ **TODO**: Consider adding rate limiting
7. ⚠️ **TODO**: Validate file names to prevent directory traversal

## Notes

- The API uses JSON file storage (no database required)
- Works in both root and subdirectory deployments
- All file paths are automatically adjusted for subdirectory deployment
- CORS is currently set to allow all origins (consider restricting in production)

