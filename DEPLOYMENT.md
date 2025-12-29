# cPanel Deployment Guide

This project has been converted to PHP + JSON + File System architecture for easy deployment on cPanel.

## Project Structure

```
vfncc/
├── api/              # PHP API endpoints
│   ├── auth.php      # Authentication endpoints
│   ├── media.php     # Media management endpoints
│   └── config.php    # Configuration and helpers
├── data/             # JSON data storage
│   ├── users.json    # User data
│   └── media.json    # Media metadata
├── uploads/          # Uploaded files (images, videos, PDFs)
├── assets/           # Frontend assets (CSS, JS)
├── index.html        # React app entry point
├── .htaccess         # Apache routing and configuration
└── [other static files]
```

## Deployment Steps

### 1. Upload Files to cPanel

1. Log into your cPanel account
2. Navigate to **File Manager**
3. Go to your domain's `public_html` directory (or subdirectory)
4. Upload all project files maintaining the folder structure

### 2. Set File Permissions

Set the following permissions via File Manager or SSH:

```bash
chmod 755 api/
chmod 644 api/*.php
chmod 755 data/
chmod 666 data/*.json
chmod 755 uploads/
chmod 644 uploads/*
chmod 644 .htaccess
chmod 644 index.html
```

### 3. Configure PHP Settings (if needed)

The `.htaccess` file already includes PHP settings for file uploads:
- `upload_max_filesize`: 100M
- `post_max_size`: 100M
- `max_execution_time`: 300

If you need to adjust these, edit the `.htaccess` file or contact your hosting provider.

### 4. Security Configuration

**IMPORTANT**: Change the JWT secret in `api/config.php`:

```php
define('JWT_SECRET', 'your-secret-key-change-this-in-production');
```

Replace with a strong, random string for production use.

### 5. Test the Application

1. Visit your domain in a browser
2. The React app should load
3. Test admin registration: `/admin/register`
4. Test admin login: `/admin/login`
5. Test media upload in the dashboard

## API Endpoints

All API endpoints are prefixed with `/api`:

- `POST /api/auth/register` - Register new admin user
- `POST /api/auth/login` - Login and get JWT token
- `POST /api/media/upload` - Upload media (requires auth)
- `GET /api/media/all` - Get all media (requires auth)
- `GET /api/media/public/images` - Get public images
- `GET /api/media/public/media` - Get public images and videos
- `DELETE /api/media/{id}` - Delete media (requires auth)

## Data Storage

- **Users**: Stored in `data/users.json`
- **Media**: Stored in `data/media.json`
- **Files**: Stored in `uploads/` directory

The JSON files are automatically created and managed by the PHP API.

## Troubleshooting

### 500 Internal Server Error
- Check PHP error logs in cPanel
- Verify file permissions
- Ensure `.htaccess` is properly configured

### File Upload Issues
- Check `uploads/` directory permissions (should be 755)
- Verify PHP upload limits in `.htaccess`
- Check available disk space

### API Not Working
- Verify `.htaccess` rewrite rules are enabled
- Check that `mod_rewrite` is enabled on your server
- Test API endpoints directly: `yourdomain.com/api/auth/login`

### CORS Issues
- CORS headers are set in `api/config.php`
- If issues persist, check server-level CORS settings

## Notes

- The application uses a simple JWT implementation for authentication
- Passwords are hashed using PHP's `password_hash()` function
- File uploads are limited to 100MB by default
- Allowed file types: images (jpeg, jpg, png, gif, webp), videos (mp4, mov, avi), and PDFs

