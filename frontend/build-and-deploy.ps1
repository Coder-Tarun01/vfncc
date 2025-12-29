# Build and Deploy Script for Production
# This script builds the frontend and copies files to production directories

Write-Host "Building frontend for production..." -ForegroundColor Green
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "Build successful! Copying files to production..." -ForegroundColor Green
    
    # Copy index.html to root
    Copy-Item -Path "dist\index.html" -Destination "..\index.html" -Force
    Write-Host "✓ Copied index.html to root" -ForegroundColor Cyan
    
    # Copy assets to root assets folder
    Copy-Item -Path "dist\assets\*" -Destination "..\assets\" -Force
    Write-Host "✓ Copied assets to production folder" -ForegroundColor Cyan
    
    Write-Host "`nProduction deployment complete! 🎉" -ForegroundColor Green
    Write-Host "Files are ready in the root directory." -ForegroundColor Yellow
} else {
    Write-Host "Build failed! Please check the errors above." -ForegroundColor Red
    exit 1
}

