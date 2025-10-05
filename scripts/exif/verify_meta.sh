#!/usr/bin/env bash
set -euo pipefail

# Verify GEO Metadata
# Displays consolidated metadata for images and videos
# Usage: bash scripts/exif/verify_meta.sh

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.."; pwd)"

command -v exiftool >/dev/null || { 
  echo "❌ exiftool is required"
  exit 1
}

echo "════════════════════════════════════════════════════════════"
echo "  GEO METADATA VERIFICATION REPORT"
echo "════════════════════════════════════════════════════════════"
echo ""

# Images
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📷 IMAGES (WebP/JPG/PNG)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

img_count=0
for f in "$root/public/images"/**/*.{jpg,jpeg,webp,png}; do
  [[ -f "$f" ]] || continue
  ((img_count++))
  
  if [ $img_count -le 5 ]; then
    echo "📁 File: $(basename "$f")"
    exiftool -G1 -s \
      -XMP-photoshop:City \
      -XMP-iptcCore:CountryName \
      -XMP:GPSLatitude \
      -XMP:GPSLongitude \
      -XMP-dc:Subject \
      -IPTC:City \
      -IPTC:Country-PrimaryLocationName \
      "$f" 2>/dev/null | grep -v "^$"
    echo ""
  fi
done

if [ $img_count -eq 0 ]; then
  echo "ℹ️  No images found"
else
  echo "📊 Total images with metadata: $img_count"
  echo ""
  
  # Sample GPS coordinates
  echo "🗺️  Sample GPS Coordinates:"
  for f in "$root/public/images"/**/*.{jpg,jpeg,webp,png}; do
    [[ -f "$f" ]] || continue
    lat=$(exiftool -s -s -s -XMP:GPSLatitude "$f" 2>/dev/null)
    lon=$(exiftool -s -s -s -XMP:GPSLongitude "$f" 2>/dev/null)
    if [[ -n "$lat" && -n "$lon" ]]; then
      echo "   $(basename "$f"): $lat, $lon"
      break
    fi
  done
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🎥 VIDEOS (MP4/MOV)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

vid_count=0
for f in "$root/public/videos"/**/*.{mp4,MP4,mov,MOV}; do
  [[ -f "$f" ]] || continue
  ((vid_count++))
  
  if [ $vid_count -le 3 ]; then
    echo "📁 File: $(basename "$f")"
    exiftool -G1 -s \
      -QuickTime:GPSCoordinates \
      -Keys:LocationName \
      -Keys:LocationInformation \
      "$f" 2>/dev/null | grep -v "^$"
    echo ""
  fi
done

if [ $vid_count -eq 0 ]; then
  echo "ℹ️  No videos found in public/videos/"
else
  echo "📊 Total videos with metadata: $vid_count"
fi

echo ""
echo "════════════════════════════════════════════════════════════"
echo "✅ Verification Complete"
echo "════════════════════════════════════════════════════════════"
echo ""
echo "📝 Summary:"
echo "   Images: $img_count files"
echo "   Videos: $vid_count files"
echo ""
echo "🔍 To view full metadata for a specific file:"
echo "   exiftool -G1 -a -s path/to/file.webp"
echo ""

