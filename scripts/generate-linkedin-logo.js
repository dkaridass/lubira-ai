import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = './public';
const svgPath = path.join(publicDir, 'logo-icon.svg');
const outputPath = path.join(publicDir, 'linkedin-logo-300x300.png');

async function generate() {
  try {
    if (!fs.existsSync(svgPath)) {
      console.error(`SVG not found at ${svgPath}`);
      return;
    }
    const svgBuffer = fs.readFileSync(svgPath);
    await sharp(svgBuffer)
      .resize(300, 300)
      .png()
      .toFile(outputPath);
    console.log(`Success: Generated 300x300 logo at ${outputPath}`);
  } catch (err) {
    console.error('Error generating logo:', err);
  }
}

generate();
