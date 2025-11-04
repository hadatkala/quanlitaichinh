@echo off
echo ========================================
echo    Update Code to GitHub
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

echo [STEP 1] Checking Git status...
git status
echo.

echo [STEP 2] Adding all changes...
git add .
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to add files!
    pause
    exit /b 1
)
echo [SUCCESS] Files added to staging
echo.

echo [STEP 3] Committing changes...
set /p COMMIT_MSG="Enter commit message (or press Enter for default): "
if "%COMMIT_MSG%"=="" (
    set COMMIT_MSG=Update: Improved transaction form and category selection
)

git commit -m "%COMMIT_MSG%"
if %ERRORLEVEL% NEQ 0 (
    echo [WARNING] No changes to commit or already committed
)
echo.

echo [STEP 4] Pushing to GitHub...
echo.
echo [INFO] You will be asked for GitHub credentials:
echo - Username: Your GitHub username
echo - Password: Use Personal Access Token (NOT your GitHub password)
echo.
echo To create token: https://github.com/settings/tokens
echo.
pause

git push origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo    SUCCESS!
    echo ========================================
    echo.
    echo Code has been pushed to GitHub!
    echo Repository: https://github.com/hadatkala/quanlitaichinh
    echo.
    echo If deployed on Railway/Render:
    echo - Railway: Auto-deploys on push
    echo - Render: Auto-deploys on push
    echo.
    echo Check your deployment status on the platform!
    echo.
) else (
    echo.
    echo ========================================
    echo    ERROR
    echo ========================================
    echo.
    echo Failed to push. Check errors above.
    echo.
    echo Common issues:
    echo 1. Authentication failed - use Personal Access Token
    echo 2. Remote not set - run: git remote add origin https://github.com/hadatkala/quanlitaichinh.git
    echo 3. Branch mismatch - run: git branch -M main
    echo.
)

pause

