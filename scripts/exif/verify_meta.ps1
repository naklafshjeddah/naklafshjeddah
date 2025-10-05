# Verify GEO Metadata (PowerShell)
# Displays consolidated metadata for images and videos
# Usage: powershell -ExecutionPolicy Bypass -File scripts/exif/verify_meta.ps1

$ErrorActionPreference = "Stop"

# Check for exiftool
$exiftool = Get-Command exiftool -ErrorAction SilentlyContinue
if (-not $exiftool) {
    Write-Host "exiftool is required" -ForegroundColor Red
    exit 1
}

Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "  GEO METADATA VERIFICATION REPORT" -ForegroundColor White
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host ""

# Images
Write-Host "IMAGES (WebP/JPG/PNG)" -ForegroundColor Yellow
Write-Host "------------------------------------------------------------" -ForegroundColor Yellow
Write-Host ""

$imageFiles = Get-ChildItem -Path "public\images" -Recurse -Include *.jpg,*.jpeg,*.webp,*.png -File -ErrorAction SilentlyContinue
$img_count = 0
if ($imageFiles) {
    $img_count = $imageFiles.Count
}

if ($img_count -eq 0) {
    Write-Host "No images found" -ForegroundColor Yellow
} else {
    $sampleCount = [Math]::Min(5, $img_count)
    for ($i = 0; $i -lt $sampleCount; $i++) {
        $file = $imageFiles[$i]
        Write-Host "File: $($file.Name)" -ForegroundColor Cyan
        
        & exiftool -G1 -s `
            -XMP-photoshop:City `
            -XMP-iptcCore:CountryName `
            -XMP:GPSLatitude `
            -XMP:GPSLongitude `
            -XMP-dc:Subject `
            -IPTC:City `
            -IPTC:Country-PrimaryLocationName `
            $file.FullName 2>$null | Where-Object { $_ -ne "" }
        
        Write-Host ""
    }
    
    Write-Host "Total images with metadata: $img_count" -ForegroundColor Green
    Write-Host ""
    
    # Sample GPS coordinates
    Write-Host "Sample GPS Coordinates:" -ForegroundColor Cyan
    $sampleFile = $imageFiles[0]
    $lat = & exiftool -s -s -s -XMP:GPSLatitude $sampleFile.FullName 2>$null
    $lon = & exiftool -s -s -s -XMP:GPSLongitude $sampleFile.FullName 2>$null
    if ($lat -and $lon) {
        Write-Host "   $($sampleFile.Name): $lat, $lon" -ForegroundColor White
    }
}

Write-Host ""
Write-Host "VIDEOS (MP4/MOV)" -ForegroundColor Yellow
Write-Host "------------------------------------------------------------" -ForegroundColor Yellow
Write-Host ""

$videoFiles = @()
if (Test-Path "public\videos") {
    $videoFiles = Get-ChildItem -Path "public\videos" -Recurse -Include *.mp4,*.MP4,*.mov,*.MOV -File -ErrorAction SilentlyContinue
}
$vid_count = 0
if ($videoFiles) {
    $vid_count = $videoFiles.Count
}

if ($vid_count -eq 0) {
    Write-Host "No videos found in public\videos" -ForegroundColor Yellow
} else {
    $sampleCount = [Math]::Min(3, $vid_count)
    for ($i = 0; $i -lt $sampleCount; $i++) {
        $file = $videoFiles[$i]
        Write-Host "File: $($file.Name)" -ForegroundColor Cyan
        
        & exiftool -G1 -s `
            -QuickTime:GPSCoordinates `
            -Keys:LocationName `
            -Keys:LocationInformation `
            $file.FullName 2>$null | Where-Object { $_ -ne "" }
        
        Write-Host ""
    }
    
    Write-Host "Total videos with metadata: $vid_count" -ForegroundColor Green
}

Write-Host ""
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "Verification Complete" -ForegroundColor Green
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Summary:" -ForegroundColor Yellow
Write-Host "   Images: $img_count files" -ForegroundColor White
Write-Host "   Videos: $vid_count files" -ForegroundColor White
Write-Host ""
Write-Host "To view full metadata for a specific file:" -ForegroundColor Cyan
Write-Host "   exiftool -G1 -a -s public\images\yourfile.webp" -ForegroundColor White
Write-Host ""

