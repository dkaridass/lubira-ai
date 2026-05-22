const sharp = require('sharp');
const fs = require('fs');

async function generateIcons() {
  const svgBuffer = fs.readFileSync('./public/favicon.svg');

  // Generate 180x180 for apple-touch-icon
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile('./public/apple-touch-icon.png');

  // Generate 32x32 for standard favicon fallback
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile('./public/favicon.png');

  console.log('Icons generated successfully.');
}

generateIcons().catch(console.error);
