const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputFolder = path.join(__dirname, "public/images");
const outputFolder = path.join(__dirname, "public/images/optimized");

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

fs.readdirSync(inputFolder).forEach(file => {
  const ext = path.extname(file).toLowerCase();

  if ([".jpg", ".jpeg", ".png"].includes(ext)) {
    const inputPath = path.join(inputFolder, file);

    const outputFileName =
      path.basename(file, ext) + ".webp";

    const outputPath = path.join(outputFolder, outputFileName);

    sharp(inputPath)
      .resize(1200)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => {
        console.log(`Converted: ${file} → ${outputFileName}`);
      })
      .catch(err => {
        console.error(`Error processing ${file}:`, err);
      });
  }
});