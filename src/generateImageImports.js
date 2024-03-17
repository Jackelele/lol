const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, './assets/clowns');
const outputFilePath = path.join(__dirname, 'clownsImageData.js');

fs.readdir(imagesDir, (err, files) => {
  if (err) throw err;

  const imports = files.map((file, index) => `import img${index} from './assets/clowns/${file}';`).join('\n');
  const exports = `export const images = [${files.map((_, index) => `img${index}`).join(', ')}];`;

  const content = `${imports}\n\n${exports}\n`;

  fs.writeFile(outputFilePath, content, (err) => {
    if (err) throw err;
    console.log('Image imports file generated successfully.');
  });
});