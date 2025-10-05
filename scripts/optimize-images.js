/**
 * Image Optimization Script
 * This script optimizes all images in the public/images directory
 * Run: node scripts/optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_DIR = path.join(__dirname, '../public/images');
const OUTPUT_DIR = path.join(__dirname, '../public/images/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Quality settings
const QUALITY = {
  jpg: 85,
  webp: 85,
  avif: 80,
};

// Max dimensions
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1080;

async function optimizeImage(inputPath, filename) {
  const outputPath = path.join(OUTPUT_DIR, filename);
  const nameWithoutExt = path.parse(filename).name;
  
  try {
    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    
    // Calculate new dimensions if image is too large
    let width = metadata.width;
    let height = metadata.height;
    
    if (width > MAX_WIDTH || height > MAX_HEIGHT) {
      const ratio = Math.min(MAX_WIDTH / width, MAX_HEIGHT / height);
      width = Math.round(width * ratio);
      height = Math.round(height * ratio);
    }
    
    // Optimize JPG
    await sharp(inputPath)
      .resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .jpeg({ quality: QUALITY.jpg, progressive: true, mozjpeg: true })
      .toFile(outputPath);
    
    // Generate WebP
    const webpPath = path.join(OUTPUT_DIR, `${nameWithoutExt}.webp`);
    await sharp(inputPath)
      .resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: QUALITY.webp })
      .toFile(webpPath);
    
    // Generate AVIF (smaller but slower to encode)
    const avifPath = path.join(OUTPUT_DIR, `${nameWithoutExt}.avif`);
    await sharp(inputPath)
      .resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .avif({ quality: QUALITY.avif })
      .toFile(avifPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const webpSize = fs.statSync(webpPath).size;
    const avifSize = fs.statSync(avifPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);
    
    console.log(`✓ ${filename}:`);
    console.log(`  Original: ${(originalSize / 1024).toFixed(2)} KB`);
    console.log(`  Optimized JPG: ${(optimizedSize / 1024).toFixed(2)} KB (${savings}% smaller)`);
    console.log(`  WebP: ${(webpSize / 1024).toFixed(2)} KB`);
    console.log(`  AVIF: ${(avifSize / 1024).toFixed(2)} KB`);
    
    return {
      filename,
      originalSize,
      optimizedSize,
      webpSize,
      avifSize,
      savings: parseFloat(savings),
    };
  } catch (error) {
    console.error(`✗ Error processing ${filename}:`, error.message);
    return null;
  }
}

async function optimizeAllImages() {
  console.log('🖼️  Starting image optimization...\n');
  
  const files = fs.readdirSync(INPUT_DIR).filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file)
  );
  
  const results = [];
  
  for (const file of files) {
    const inputPath = path.join(INPUT_DIR, file);
    const result = await optimizeImage(inputPath, file);
    if (result) results.push(result);
  }
  
  // Calculate total savings
  const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
  const totalOptimized = results.reduce((sum, r) => sum + r.optimizedSize, 0);
  const totalWebp = results.reduce((sum, r) => sum + r.webpSize, 0);
  const totalAvif = results.reduce((sum, r) => sum + r.avifSize, 0);
  
  console.log('\n📊 Summary:');
  console.log(`Total images processed: ${results.length}`);
  console.log(`Total original size: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total optimized JPG: ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total WebP: ${(totalWebp / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total AVIF: ${(totalAvif / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Savings (JPG): ${((totalOriginal - totalOptimized) / totalOriginal * 100).toFixed(2)}%`);
  console.log(`Savings (WebP): ${((totalOriginal - totalWebp) / totalOriginal * 100).toFixed(2)}%`);
  console.log(`Savings (AVIF): ${((totalOriginal - totalAvif) / totalOriginal * 100).toFixed(2)}%`);
  
  console.log('\n✅ Optimization complete!');
  console.log(`\nOptimized images saved to: ${OUTPUT_DIR}`);
  console.log('\nNext steps:');
  console.log('1. Review the optimized images');
  console.log('2. Replace original images with optimized versions if satisfied');
  console.log('3. Update next.config.mjs to use modern formats (WebP/AVIF)');
}

// Run the optimization
optimizeAllImages().catch(console.error);

