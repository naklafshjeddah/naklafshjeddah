# GEO Metadata Tagging for Videos (PowerShell)
# Adds QuickTime GPS coordinates to all videos in public/videos/
# Usage: powershell -ExecutionPolicy Bypass -File scripts/exif/tag_videos.ps1

$ErrorActionPreference = "Stop"

# Check for exiftool
$exiftool = Get-Command exiftool -ErrorAction SilentlyContinue
if (-not $exiftool) {
    Write-Host "❌ exiftool is required. Install:" -ForegroundColor Red
    Write-Host "   Option 1: choco install exiftool" -ForegroundColor Yellow
    Write-Host "   Option 2: Download from https://exiftool.org/" -ForegroundColor Yellow
    Write-Host "   See EXIFTOOL_INSTALL.md for details" -ForegroundColor Yellow
    exit 1
}

# Jeddah coordinates
$LAT = 21.492500
$LON = 39.177570

Write-Host "🎥 Starting GEO metadata tagging for videos..." -ForegroundColor Cyan
Write-Host "📍 Base location: Jeddah ($LAT, $LON)" -ForegroundColor Cyan
Write-Host ""

# Create videos directory if it doesn't exist
if (-not (Test-Path "public\videos")) {
    New-Item -ItemType Directory -Path "public\videos" -Force | Out-Null
}

$count = 0
$videoFiles = Get-ChildItem -Path "public\videos" -Recurse -Include *.mp4,*.MP4,*.mov,*.MOV -File

if ($videoFiles.Count -eq 0) {
    Write-Host "ℹ️  No video files found in public\videos\" -ForegroundColor Yellow
    Write-Host "   Create the directory and add MP4 files, then run again" -ForegroundColor Yellow
    exit 0
}

foreach ($file in $videoFiles) {
    # Generate jittered coordinates (±0.0012°)
    $jlat = $LAT + ((Get-Random -Minimum 0.0 -Maximum 1.0) - 0.5) * 0.0024
    $jlon = $LON + ((Get-Random -Minimum 0.0 -Maximum 1.0) - 0.5) * 0.0024
    $jlat = [math]::Round($jlat, 6)
    $jlon = [math]::Round($jlon, 6)
    
    # Write QuickTime GPS metadata
    & exiftool -overwrite_original -P -n `
        "-QuickTime:GPSCoordinates=$jlat,$jlon,12" `
        "-Keys:LocationName=Jeddah, Saudi Arabia" `
        "-Keys:LocationInformation=جدة، المملكة العربية السعودية" `
        "-QuickTime:Make=naklafshjeddah.com" `
        "-QuickTime:Copyright=© 2025 شركة الأفضل لنقل العفش - Naklafshjeddah.com" `
        $file.FullName 2>$null
    
    $count++
    Write-Host "✅ $($file.Name) → $jlat,$jlon" -ForegroundColor Green
}

Write-Host ""
Write-Host "🎉 Completed! Tagged $count videos with GEO metadata" -ForegroundColor Green
Write-Host "📍 All videos now have:" -ForegroundColor Cyan
Write-Host "   - GPS coordinates (Jeddah + jitter)" -ForegroundColor White
Write-Host "   - Location name metadata" -ForegroundColor White
Write-Host "   - Copyright information" -ForegroundColor White

