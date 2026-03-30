# Film Nagar Cultural Centre Website

A modern, responsive website for Film Nagar Cultural Centre with an admin panel for media management.

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
├── uploads/          # Uploaded files
├── assets/           # Frontend assets (CSS, JS)
├── index.html        # React app entry point
├── .htaccess         # Apache routing and configuration
└── frontend/         # React source code (for development)
```

## Technology Stack

- **Frontend**: React + Tailwind CSS, fully responsive
- **Backend**: PHP + JSON file storage
- **Authentication**: JWT-based authentication
- **Media Management**: Upload and manage media files
- **Storage**: JSON files + File system

## Development Setup

### Frontend Development

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

The frontend will run on http://localhost:5173

4. Build for production:
```bash
npm run build
```

### Backend (PHP)

The PHP backend is ready to use. For local development:

1. Use a local PHP server (XAMPP, WAMP, or PHP built-in server)
2. The API endpoints are available at `/api/*`
3. No database setup required - uses JSON files in `data/` directory

## Production Deployment (cPanel)

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed cPanel deployment instructions.

Quick steps:
1. Upload all files to `public_html` (or subdirectory)
2. Set proper file permissions
3. Change JWT_SECRET in `api/config.php`
4. Done! No database setup needed.

## Admin Panel

To access the admin panel:

1. Register a new account at `/admin/register`
2. Login at `/admin/login`
3. Access dashboard at `/admin/dashboard`

The admin panel allows you to:
- Upload media files (images, videos, PDFs)
- View all uploaded media
- Delete media files

## API Endpoints

- `POST /api/auth/register` - Register new admin user
- `POST /api/auth/login` - Login and get JWT token
- `POST /api/media/upload` - Upload media (requires auth)
- `GET /api/media/all` - Get all media (requires auth)
- `GET /api/media/public/images` - Get public images
- `GET /api/media/public/media` - Get public images and videos
- `DELETE /api/media/{id}` - Delete media (requires auth)

