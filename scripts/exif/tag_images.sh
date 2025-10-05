#!/usr/bin/env bash
set -euo pipefail

# GEO Metadata Tagging for Images (WebP)
# Adds XMP + GPS coordinates to all images in public/images/
# Usage: bash scripts/exif/tag_images.sh

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.."; pwd)"
shopt -s globstar nullglob

# Check for exiftool
command -v exiftool >/dev/null || { 
  echo "❌ exiftool is required. Install:"
  echo "   macOS: brew install exiftool"
  echo "   Linux: sudo apt-get install libimage-exiftool-perl"
  echo "   Windows: download from https://exiftool.org/"
  exit 1
}

# Jeddah coordinates
LAT=21.492500
LON=39.177570

# Neighborhood tokens to detect in filenames
NEI=("hamra" "alhamra" "shatie" "shate" "rawdah" "salama" "naeem" "marjan" "khalidiya" "andalus" "aziziyah" "basateen" "bawadi" "hamdaniyah" "jamaa" "mohamadiyah" "murjan" "nahdah" "naseem" "nuzha" "rabwa" "rihab" "ruwais" "sharafiyah" "sulaymaniyah" "thalaba" "zahraa" "banimalik" "obhur")

echo "🗺️  Starting GEO metadata tagging for images..."
echo "📍 Base location: Jeddah ($LAT, $LON)"
echo ""

count=0
for f in "$root/public/images"/**/*.{jpg,jpeg,webp,png}; do
  [[ -f "$f" ]] || continue
  
  base="$(basename "$f" | tr '[:upper:]' '[:lower:]')"
  filename_no_ext="${base%.*}"
  
  # Start with base keywords
  arKw="نقل عفش, جدة, شركة نقل"
  enKw="Furniture Moving, Jeddah, Moving Company"
  locationHint=""
  
  # Check for neighborhood tokens in filename
  for n in "${NEI[@]}"; do
    if [[ "$base" == *"$n"* ]]; then
      case "$n" in
        hamra|alhamra)     arKw="$arKw, الحمراء"; enKw="$enKw, Al Hamra"; locationHint="Al Hamra";;
        shatie|shate)      arKw="$arKw, الشاطئ"; enKw="$enKw, Ash Shati"; locationHint="Ash Shati";;
        rawdah)            arKw="$arKw, الروضة"; enKw="$enKw, Ar Rawdah"; locationHint="Ar Rawdah";;
        salama)            arKw="$arKw, السلامة"; enKw="$enKw, As Salamah"; locationHint="As Salamah";;
        naeem)             arKw="$arKw, النعيم"; enKw="$enKw, An Naim"; locationHint="An Naim";;
        marjan|murjan)     arKw="$arKw, المرجان"; enKw="$enKw, Al Murjan"; locationHint="Al Murjan";;
        khalidiya)         arKw="$arKw, الخالدية"; enKw="$enKw, Al Khalidiya"; locationHint="Al Khalidiya";;
        andalus)           arKw="$arKw, الأندلس"; enKw="$enKw, Al Andalus"; locationHint="Al Andalus";;
        aziziyah)          arKw="$arKw, العزيزية"; enKw="$enKw, Al Aziziyah"; locationHint="Al Aziziyah";;
        basateen)          arKw="$arKw, البساتين"; enKw="$enKw, Al Basateen"; locationHint="Al Basateen";;
        bawadi)            arKw="$arKw, البوادي"; enKw="$enKw, Al Bawadi"; locationHint="Al Bawadi";;
        hamdaniyah)        arKw="$arKw, الحمدانية"; enKw="$enKw, Al Hamdaniyah"; locationHint="Al Hamdaniyah";;
        jamaa)             arKw="$arKw, الجامعة"; enKw="$enKw, Al Jamaa"; locationHint="Al Jamaa";;
        mohamadiyah)       arKw="$arKw, المحمدية"; enKw="$enKw, Al Mohamadiyah"; locationHint="Al Mohamadiyah";;
        nahdah)            arKw="$arKw, النهضة"; enKw="$enKw, An Nahdah"; locationHint="An Nahdah";;
        naseem)            arKw="$arKw, النسيم"; enKw="$enKw, An Naseem"; locationHint="An Naseem";;
        nuzha)             arKw="$arKw, النزهة"; enKw="$enKw, An Nuzha"; locationHint="An Nuzha";;
        rabwa)             arKw="$arKw, الربوة"; enKw="$enKw, Ar Rabwa"; locationHint="Ar Rabwa";;
        rihab)             arKw="$arKw, الرحاب"; enKw="$enKw, Ar Rihab"; locationHint="Ar Rihab";;
        ruwais)            arKw="$arKw, الرويس"; enKw="$enKw, Ar Ruwais"; locationHint="Ar Ruwais";;
        sharafiyah)        arKw="$arKw, الشرفية"; enKw="$enKw, Ash Sharafiyah"; locationHint="Ash Sharafiyah";;
        sulaymaniyah)      arKw="$arKw, السليمانية"; enKw="$enKw, As Sulaymaniyah"; locationHint="As Sulaymaniyah";;
        thalaba)           arKw="$arKw, الثعالبة"; enKw="$enKw, Ath Thalaba"; locationHint="Ath Thalaba";;
        zahraa)            arKw="$arKw, الزهراء"; enKw="$enKw, Az Zahraa"; locationHint="Az Zahraa";;
        banimalik)         arKw="$arKw, بني مالك"; enKw="$enKw, Bani Malik"; locationHint="Bani Malik";;
        obhur)             arKw="$arKw, أبحر"; enKw="$enKw, Obhur"; locationHint="Obhur";;
      esac
      break
    fi
  done
  
  # Generate jittered coordinates (±0.0012° ≈ 130m)
  jlat="$(awk -v a="$LAT" 'BEGIN{srand(); printf("%.6f", a + (rand()-0.5)*0.0024)}')"
  jlon="$(awk -v a="$LON" 'BEGIN{srand(); printf("%.6f", a + (rand()-0.5)*0.0024)}')"
  
  # Add service type keywords based on filename
  if [[ "$base" == *"packing"* ]] || [[ "$base" == *"تغليف"* ]]; then
    arKw="$arKw, تغليف"
    enKw="$enKw, Packing"
  fi
  if [[ "$base" == *"storage"* ]] || [[ "$base" == *"تخزين"* ]]; then
    arKw="$arKw, تخزين"
    enKw="$enKw, Storage"
  fi
  if [[ "$base" == *"truck"* ]] || [[ "$base" == *"شاحنة"* ]]; then
    arKw="$arKw, نقل"
    enKw="$enKw, Transport"
  fi
  if [[ "$base" == *"office"* ]] || [[ "$base" == *"مكتب"* ]]; then
    arKw="$arKw, نقل مكاتب"
    enKw="$enKw, Office Moving"
  fi
  if [[ "$base" == *"villa"* ]] || [[ "$base" == *"فلل"* ]]; then
    arKw="$arKw, نقل فلل"
    enKw="$enKw, Villa Moving"
  fi
  
  # Write metadata
  exiftool -overwrite_original -P -n \
    -XMP-photoshop:City="Jeddah" \
    -XMP-photoshop:State="Makkah Province" \
    -XMP-iptcCore:CountryName="Saudi Arabia" \
    -XMP:CountryCode="SA" \
    -IPTC:City="جدة" \
    -IPTC:Province-State="منطقة مكة المكرمة" \
    -IPTC:Country-PrimaryLocationName="المملكة العربية السعودية" \
    -XMP-dc:Subject="$arKw" \
    -XMP-dc:Subject="$enKw" \
    -XMP:GPSLatitude="$jlat" \
    -XMP:GPSLongitude="$jlon" \
    -XMP:GPSAltitude="12" \
    -XMP-photoshop:Credit="naklafshjeddah.com" \
    -XMP-dc:Rights="© 2025 شركة الأفضل لنقل العفش - Naklafshjeddah.com" \
    "$f" 2>/dev/null
  
  ((count++))
  if [[ -n "$locationHint" ]]; then
    echo "✅ $base → $jlat,$jlon [$locationHint]"
  else
    echo "✅ $base → $jlat,$jlon"
  fi
done

echo ""
echo "🎉 Completed! Tagged $count images with GEO metadata"
echo "📍 All images now have:"
echo "   - GPS coordinates (Jeddah + jitter)"
echo "   - City/Country metadata"
echo "   - Arabic + English keywords"
echo "   - Neighborhood tags (where detected)"

