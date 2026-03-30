// Script to fix image paths - run with: node fix_image_paths.js
const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'frontend/src/pages/FacilityDetail.jsx',
  'frontend/src/pages/Sports.jsx',
  'frontend/src/pages/SportDetail.jsx',
  'frontend/src/pages/Gallery.jsx',
  'frontend/src/components/Footer.jsx',
  'frontend/src/pages/About.jsx',
  'frontend/src/pages/Home.jsx'
];

filesToUpdate.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Add import if not present
    if (!content.includes("import { getAssetPath }")) {
      const lines = content.split('\n');
      let importIndex = lines.findIndex(line => line.includes('import') && !line.includes('getAssetPath'));
      if (importIndex === -1) importIndex = 0;
      const insertIndex = lines.findIndex((line, idx) => idx >= importIndex && line.trim() === '');
      lines.splice(insertIndex > 0 ? insertIndex : importIndex + 1, 0, "import { getAssetPath } from '../utils/assets'");
      content = lines.join('\n');
    }
    
    // Replace image paths - be careful with this pattern
    content = content.replace(/image:\s*['"]\/(facilities|sports|committe|vfncc|fncc|headingdesign|sportssectionbg|billiards|tenniscourt|childrensplayarea|booknow)\.(png|jpg|jpeg)/g, (match) => {
      return match.replace(/image:\s*['"]/, "image: getAssetPath('");
    });
    
    // Replace src paths
    content = content.replace(/src=["']\/(facilities|sports|committe|vfncc|fncc|headingdesign|sportssectionbg|billiards|tenniscourt|childrensplayarea|booknow)/g, (match) => {
      return match.replace(/src=["']/, "src={getAssetPath('");
    });
    
    // Fix closing quotes/parens for src
    content = content.replace(/getAssetPath\('([^']+)'\)\}/g, "getAssetPath('/$1')}");
    
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
});

