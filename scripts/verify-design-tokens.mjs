import fs from 'fs';
import path from 'path';

const root = path.resolve(process.cwd());
const logoRoot = path.join(root, 'public', 'design-tokens', 'logos', 'sihlhack');
const manifestPath = path.join(logoRoot, 'logo.meta.json');

if (!fs.existsSync(manifestPath)) {
  throw new Error(`Missing vendored design-tokens manifest at ${manifestPath}`);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
if (manifest.brand !== 'sihlhack') {
  throw new Error('Vendored manifest belongs to the wrong brand');
}
for (const name of ['icon.svg', 'lockup.svg', 'wordmark.svg']) {
  if (!fs.existsSync(path.join(logoRoot, name))) {
    throw new Error(`Missing vendored logo: ${name}`);
  }
}

console.log('Vendored design-tokens manifest and SVGs are valid.');
