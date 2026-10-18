@echo off
chcp 65001 >nul
cd /d "%~dp0"
"%~dp0runtime\node.exe" "%~dp0server.cjs"
if errorlevel 1 pause
