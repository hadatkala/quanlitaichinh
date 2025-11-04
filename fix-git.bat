@echo off
echo ========================================
echo    Fix Git Issues and Push to GitHub
echo ========================================
echo.

REM Check if Git is installed
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Git is not installed!
    echo Please install Git from: https://git-scm.com/download/win
    pause
    exit /b 1
)

REM Change to project directory
cd /d "C:\Users\Ha Thanh Dat\Desktop\App"
echo [INFO] Current directory: %CD%
echo.

REM Remove lock file if exists
echo [STEP 1] Removing lock files...
if exist ".git\index.lock" (
    del /f /q ".git\index.lock"
    echo [INFO] Removed index.lock
)
echo.

REM Configure Git if needed
echo [STEP 2] Configuring Git...
git config --global user.name "Ha Thanh Dat" >nul 2>nul
git config --global user.email "hatthanhdat@example.com" >nul 2>nul
echo [INFO] Git configured
echo.

REM Initialize Git
echo [STEP 3] Initializing Git repository...
git init
echo.

REM Add all files
echo [STEP 4] Adding all files...
git add .
echo.

REM Commit
echo [STEP 5] Committing...
git commit -m "Initial commit - Finance Manager App"
if %ERRORLEVEL% NEQ 0 (
    echo [WARNING] Commit failed or no changes
    echo.
    echo Checking status...
    git status
    echo.
) else (
    echo [SUCCESS] Files committed!
)
echo.

REM Set branch to main
echo [STEP 6] Setting branch to main...
git branch -M main
echo.

echo ========================================
echo    Repository Setup
echo ========================================
echo.
echo Please provide your GitHub repository URL:
echo Example: https://github.com/YOUR-USERNAME/finance-manager.git
echo.
set /p REPO_URL="Repository URL: "

if "%REPO_URL%"=="" (
    echo [ERROR] Repository URL is required!
    pause
    exit /b 1
)

echo.
echo [STEP 7] Setting up remote...
git remote remove origin 2>nul
git remote add origin %REPO_URL%
echo [INFO] Remote origin set to: %REPO_URL%
echo.

echo [STEP 8] Pushing to GitHub...
echo.
echo [INFO] You will be asked for GitHub credentials:
echo - Username: Your GitHub username
echo - Password: Use Personal Access Token
echo.
echo To create token: https://github.com/settings/tokens
echo.
pause

git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo    SUCCESS!
    echo ========================================
    echo.
    echo Code has been pushed to GitHub!
    echo Repository: %REPO_URL%
    echo.
    echo Next step: Deploy on Railway
    echo https://railway.app
    echo.
) else (
    echo.
    echo ========================================
    echo    ERROR
    echo ========================================
    echo.
    echo Failed to push. Check errors above.
    echo.
)

pause

