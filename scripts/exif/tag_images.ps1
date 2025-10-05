# GEO Metadata Tagging for Images (PowerShell)
# Adds XMP + GPS coordinates to all images in public/images/
# Usage: powershell -ExecutionPolicy Bypass -File scripts/exif/tag_images.ps1

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

# Neighborhood tokens
$neighborhoods = @{
    "hamra" = @("الحمراء", "Al Hamra")
    "alhamra" = @("الحمراء", "Al Hamra")
    "shatie" = @("الشاطئ", "Ash Shati")
    "shate" = @("الشاطئ", "Ash Shati")
    "rawdah" = @("الروضة", "Ar Rawdah")
    "salama" = @("السلامة", "As Salamah")
    "naeem" = @("النعيم", "An Naim")
    "marjan" = @("المرجان", "Al Murjan")
    "murjan" = @("المرجان", "Al Murjan")
    "khalidiya" = @("الخالدية", "Al Khalidiya")
    "andalus" = @("الأندلس", "Al Andalus")
    "aziziyah" = @("العزيزية", "Al Aziziyah")
    "basateen" = @("البساتين", "Al Basateen")
    "bawadi" = @("البوادي", "Al Bawadi")
    "hamdaniyah" = @("الحمدانية", "Al Hamdaniyah")
    "jamaa" = @("الجامعة", "Al Jamaa")
    "mohamadiyah" = @("المحمدية", "Al Mohamadiyah")
    "nahdah" = @("النهضة", "An Nahdah")
    "naseem" = @("النسيم", "An Naseem")
    "nuzha" = @("النزهة", "An Nuzha")
    "rabwa" = @("الربوة", "Ar Rabwa")
    "rihab" = @("الرحاب", "Ar Rihab")
    "ruwais" = @("الرويس", "Ar Ruwais")
    "sharafiyah" = @("الشرفية", "Ash Sharafiyah")
    "sulaymaniyah" = @("السليمانية", "As Sulaymaniyah")
    "thalaba" = @("الثعالبة", "Ath Thalaba")
    "zahraa" = @("الزهراء", "Az Zahraa")
    "banimalik" = @("بني مالك", "Bani Malik")
    "obhur" = @("أبحر", "Obhur")
}

Write-Host "🗺️  Starting GEO metadata tagging for images..." -ForegroundColor Cyan
Write-Host "📍 Base location: Jeddah ($LAT, $LON)" -ForegroundColor Cyan
Write-Host ""

$count = 0
$imageFiles = Get-ChildItem -Path "public\images" -Recurse -Include *.jpg,*.jpeg,*.webp,*.png -File

foreach ($file in $imageFiles) {
    $basename = $file.Name.ToLower()
    
    # Base keywords
    $arKw = "نقل عفش, جدة, شركة نقل"
    $enKw = "Furniture Moving, Jeddah, Moving Company"
    $locationHint = ""
    
    # Check for neighborhood
    foreach ($token in $neighborhoods.Keys) {
        if ($basename -match $token) {
            $arKw += ", " + $neighborhoods[$token][0]
            $enKw += ", " + $neighborhoods[$token][1]
            $locationHint = $neighborhoods[$token][1]
            break
        }
    }
    
    # Check for service types
    if ($basename -match "packing|تغليف") {
        $arKw += ", تغليف"
        $enKw += ", Packing"
    }
    if ($basename -match "storage|تخزين") {
        $arKw += ", تخزين"
        $enKw += ", Storage"
    }
    if ($basename -match "truck|شاحنة") {
        $arKw += ", نقل"
        $enKw += ", Transport"
    }
    if ($basename -match "office|مكتب") {
        $arKw += ", نقل مكاتب"
        $enKw += ", Office Moving"
    }
    if ($basename -match "villa|فلل") {
        $arKw += ", نقل فلل"
        $enKw += ", Villa Moving"
    }
    
    # Generate jittered coordinates (±0.0012°)
    $jlat = $LAT + ((Get-Random -Minimum 0.0 -Maximum 1.0) - 0.5) * 0.0024
    $jlon = $LON + ((Get-Random -Minimum 0.0 -Maximum 1.0) - 0.5) * 0.0024
    $jlat = [math]::Round($jlat, 6)
    $jlon = [math]::Round($jlon, 6)
    
    # Write metadata
    & exiftool -overwrite_original -P -n `
        "-XMP-photoshop:City=Jeddah" `
        "-XMP-photoshop:State=Makkah Province" `
        "-XMP-iptcCore:CountryName=Saudi Arabia" `
        "-XMP:CountryCode=SA" `
        "-IPTC:City=جدة" `
        "-IPTC:Province-State=منطقة مكة المكرمة" `
        "-IPTC:Country-PrimaryLocationName=المملكة العربية السعودية" `
        "-XMP-dc:Subject=$arKw" `
        "-XMP-dc:Subject=$enKw" `
        "-XMP:GPSLatitude=$jlat" `
        "-XMP:GPSLongitude=$jlon" `
        "-XMP:GPSAltitude=12" `
        "-XMP-photoshop:Credit=naklafshjeddah.com" `
        "-XMP-dc:Rights=© 2025 شركة الأفضل لنقل العفش - Naklafshjeddah.com" `
        $file.FullName 2>$null
    
    $count++
    if ($locationHint) {
        Write-Host "✅ $($file.Name) → $jlat,$jlon [$locationHint]" -ForegroundColor Green
    } else {
        Write-Host "✅ $($file.Name) → $jlat,$jlon" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "🎉 Completed! Tagged $count images with GEO metadata" -ForegroundColor Green
Write-Host "📍 All images now have:" -ForegroundColor Cyan
Write-Host "   - GPS coordinates (Jeddah + jitter)" -ForegroundColor White
Write-Host "   - City/Country metadata" -ForegroundColor White
Write-Host "   - Arabic + English keywords" -ForegroundColor White
Write-Host "   - Neighborhood tags (where detected)" -ForegroundColor White

