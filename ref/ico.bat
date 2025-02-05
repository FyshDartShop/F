@echo off
if "%~1"=="" (
    echo Drag image file onto script
    pause
    exit /b
)

set "input=%~1"
set "output=%~dpn1.ico"
magick convert "%input%" -background none -define icon:auto-resize=16,24,32,48,64,72,96,128,256 "%output%"
