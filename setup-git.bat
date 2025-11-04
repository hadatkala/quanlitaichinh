@echo off
echo ========================================
echo    Git Configuration Setup
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

echo [STEP 1] Configuring Git user name...
set /p GIT_NAME="Enter your name (e.g., Ha Thanh Dat): "
git config --global user.name "%GIT_NAME%"
echo.

echo [STEP 2] Configuring Git user email...
set /p GIT_EMAIL="Enter your email (e.g., your-email@example.com): "
git config --global user.email "%GIT_EMAIL%"
echo.

echo [INFO] Git configuration:
git config --global --list
echo.

echo [STEP 3] Initializing Git repository...
git init
echo.

echo [STEP 4] Adding all files...
git add .
echo.

echo [STEP 5] Creating initial commit...
git commit -m "Initial commit - Finance Manager App"
if %ERRORLEVEL% EQU 0 (
    echo.
    echo [SUCCESS] Git repository initialized and files committed!
    echo.
    echo ========================================
    echo    Next Steps:
    echo ========================================
    echo.
    echo 1. Create repository on GitHub:
    echo    https://github.com/new
    echo.
    echo 2. Copy repository URL
    echo.
    echo 3. Run:
    echo    git remote add origin https://github.com/YOUR-USERNAME/finance-manager.git
    echo    git branch -M main
    echo    git push -u origin main
    echo.
) else (
    echo.
    echo [WARNING] Commit failed. Check errors above.
    echo.
)

pause

