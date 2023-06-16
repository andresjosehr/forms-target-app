@REM Get current directory
@setlocal enableextensions enabledelayedexpansion
@set "CURRENT_DIR=%~dp0"
mklink /D "%CURRENT_DIR%node_modules/entities-builder" "C:\Users\josea\AppData\Roaming\npm\node_modules\entities-builder"
@REM Prevent closing the window
@pause
```
