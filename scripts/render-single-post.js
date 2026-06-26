import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const postsDir = path.join(__dirname, '../linkedin-posts');
const brainArtifactsDir = '/Users/Apple/.gemini/antigravity/brain/0edfc27d-2f88-4fcb-a113-0e837e59727a/artifacts';

const postFile = 'post22_mama_rose.html';
const outputName = '22_mama_rose';

async function render() {
  if (!fs.existsSync(chromePath)) {
    console.error(`Chrome not found at ${chromePath}`);
    return;
  }

  console.log('Launching headless Chrome...');
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    protocolTimeout: 60000
  });

  const page = await browser.newPage();
  page.setDefaultTimeout(30000);
  await page.setViewport({ width: 1200, height: 1200, deviceScaleFactor: 2 });

  const htmlPath = path.join(postsDir, postFile);
  console.log(`Loading ${postFile}...`);
  await page.goto(`file://${htmlPath}`, { waitUntil: 'load', timeout: 30000 });

  await page.evaluate(async () => { await document.fonts.ready; });
  await new Promise(resolve => setTimeout(resolve, 1000));

  const outputPath = path.join(postsDir, `${outputName}.png`);
  console.log(`Saving screenshot to ${outputPath}...`);
  await page.screenshot({ path: outputPath, type: 'png' });

  if (!fs.existsSync(brainArtifactsDir)) {
    fs.mkdirSync(brainArtifactsDir, { recursive: true });
  }
  const artifactPath = path.join(brainArtifactsDir, `${outputName}.png`);
  fs.copyFileSync(outputPath, artifactPath);
  console.log(`Copied to artifacts: ${artifactPath}`);

  await browser.close();
  console.log('✅ Done!');
}

render().catch(err => {
  console.error('Failed:', err.message);
  process.exit(1);
});
