const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

const inputPath = path.join(__dirname, '../public/Captura de pantalla 2026-03-11 a las 19.09.33.png')
const outputDir = path.join(__dirname, '../public/images')
const outputPath = path.join(outputDir, 'whatsapp-button.webp')

if (!fs.existsSync(inputPath)) {
  console.error('Image not found:', inputPath)
  process.exit(1)
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

sharp(inputPath)
  .webp({ quality: 90, effort: 6 })
  .resize(128, 128)
  .toFile(outputPath)
  .then(() => console.log('Created: images/whatsapp-button.webp'))
  .catch(console.error)
