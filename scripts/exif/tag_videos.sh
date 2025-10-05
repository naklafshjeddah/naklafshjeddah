#!/usr/bin/env bash
set -euo pipefail

# GEO Metadata Tagging for Videos (MP4)
# Adds QuickTime GPS coordinates to all videos in public/videos/
# Usage: bash scripts/exif/tag_videos.sh

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

echo "🎥 Starting GEO metadata tagging for videos..."
echo "📍 Base location: Jeddah ($LAT, $LON)"
echo ""

# Create videos directory if it doesn't exist
mkdir -p "$root/public/videos"

count=0
for f in "$root/public/videos"/**/*.{mp4,MP4,mov,MOV}; do
  [[ -f "$f" ]] || continue
  
  base="$(basename "$f")"
  
  # Generate jittered coordinates (±0.0012° ≈ 130m)
  jlat="$(awk -v a="$LAT" 'BEGIN{srand(); printf("%.6f", a + (rand()-0.5)*0.0024)}')"
  jlon="$(awk -v a="$LON" 'BEGIN{srand(); printf("%.6f", a + (rand()-0.5)*0.0024)}')"
  
  # Write QuickTime GPS metadata
  exiftool -overwrite_original -P -n \
    -QuickTime:GPSCoordinates="${jlat},${jlon},12" \
    -Keys:LocationName="Jeddah, Saudi Arabia" \
    -Keys:LocationInformation="جدة، المملكة العربية السعودية" \
    -QuickTime:Make="naklafshjeddah.com" \
    -QuickTime:Copyright="© 2025 شركة الأفضل لنقل العفش - Naklafshjeddah.com" \
    "$f" 2>/dev/null
  
  ((count++))
  echo "✅ $base → $jlat,$jlon"
done

echo ""
if [ $count -eq 0 ]; then
  echo "ℹ️  No video files found in public/videos/"
  echo "   Create the directory and add MP4 files, then run again"
else
  echo "🎉 Completed! Tagged $count videos with GEO metadata"
  echo "📍 All videos now have:"
  echo "   - GPS coordinates (Jeddah + jitter)"
  echo "   - Location name metadata"
  echo "   - Copyright information"
fi

