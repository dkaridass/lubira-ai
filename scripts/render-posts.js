import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const posts = [
  { id: '11_jeanpierre', file: 'post11_jeanpierre.html' },
  { id: '12_patrick', file: 'post12_patrick.html' },
  { id: '13_dgrad', file: 'post13_dgrad.html' },
  { id: '14_silence', file: 'post14_silence.html' },
  { id: '15_places', file: 'post15_places.html' }
];

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const postsDir = path.join(__dirname, '../linkedin-posts');
const brainArtifactsDir = '/Users/Apple/.gemini/antigravity/brain/0edfc27d-2f88-4fcb-a113-0e837e59727a/artifacts';

async function render() {
  if (!fs.existsSync(chromePath)) {
    console.error(`Chrome not found at ${chromePath}`);
    return;
  }

  console.log('Launching headless Chrome...');
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1200, deviceScaleFactor: 2 }); // Scale factor 2 for Retina resolution

  for (const post of posts) {
    const htmlPath = path.join(postsDir, post.file);
    if (!fs.existsSync(htmlPath)) {
      console.warn(`File not found: ${htmlPath}`);
      continue;
    }

    const fileUrl = `file://${htmlPath}`;
    console.log(`Loading ${post.file}...`);
    
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    
    // Wait for fonts to load
    console.log('Waiting for fonts to load...');
    await page.evaluate(async () => {
      await document.fonts.ready;
    });
    
    // Additional delay to ensure smooth rendering/loading of external assets
    await new Promise(resolve => setTimeout(resolve, 500));

    const outputPath = path.join(postsDir, `${post.id}.png`);
    console.log(`Saving screenshot to ${outputPath}...`);
    await page.screenshot({ path: outputPath, type: 'png' });

    // Copy to brain artifacts directory so it can be previewed in UI
    if (fs.existsSync(brainArtifactsDir)) {
      const artifactPath = path.join(brainArtifactsDir, `${post.id}.png`);
      fs.copyFileSync(outputPath, artifactPath);
      console.log(`Copied screenshot to artifacts: ${artifactPath}`);
    }
  }

  await browser.close();
  console.log('All screenshots rendered successfully!');
}

render().catch(err => {
  console.error('Rendering failed:', err);
});
