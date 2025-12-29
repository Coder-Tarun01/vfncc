@echo off
echo Building frontend for production...
call npm run build

if %ERRORLEVEL% EQU 0 (
    echo Build successful! Copying files to production...
    copy /Y "dist\index.html" "..\index.html" >nul
    echo [OK] Copied index.html to root
    
    xcopy /Y /E /I "dist\assets\*" "..\assets\" >nul
    echo [OK] Copied assets to production folder
    
    echo.
    echo Production deployment complete! ^_^
    echo Files are ready in the root directory.
) else (
    echo Build failed! Please check the errors above.
    exit /b 1
)

