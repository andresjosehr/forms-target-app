@REM Get current directory
@setlocal enableextensions enabledelayedexpansion
@set "CURRENT_DIR=%~dp0"
mklink /D "%CURRENT_DIR%node_modules/entities-builder" "C:\laragon\www\molano\libs\dist\entities-builder"
@REM Prevent closing the window
@pause
```
