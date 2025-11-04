@echo off
echo ========================================
echo    Push Code to GitHub
echo ========================================
echo.

REM Check if Git is installed
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Git is not installed!
    echo.
    echo Please install Git from: https://git-scm.com/download/win
    echo.
    pause
    exit /b 1
)

echo [INFO] Git version:
git --version
echo.

echo [STEP 1] Initializing Git repository...
git init
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to initialize Git!
    pause
    exit /b 1
)
echo.

echo [STEP 2] Adding all files...
git add .
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to add files!
    pause
    exit /b 1
)
echo.

echo [STEP 3] Committing...
git commit -m "Initial commit - Finance Manager App"
if %ERRORLEVEL% NEQ 0 (
    echo [WARNING] No changes to commit or already committed
)
echo.

echo [STEP 4] Setting branch to main...
git branch -M main
if %ERRORLEVEL% NEQ 0 (
    echo [WARNING] Branch may already be main
)
echo.

echo ========================================
echo    IMPORTANT: Next Steps
echo ========================================
echo.
echo 1. Create a repository on GitHub:
echo    - Go to: https://github.com/new
echo    - Name: finance-manager (or your choice)
echo    - Choose Public
echo    - DO NOT initialize with README
echo    - Click Create repository
echo.
echo 2. Copy the repository URL
echo    Example: https://github.com/YOUR-USERNAME/finance-manager.git
echo.
echo 3. Run this command (replace URL):
echo    git remote add origin https://github.com/YOUR-USERNAME/finance-manager.git
echo.
echo 4. Then push:
echo    git push -u origin main
echo.
echo ========================================
echo.

pause

