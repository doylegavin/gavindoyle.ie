// Simple script to create placeholder images for projects
// Run with: node scripts/create-placeholder-images.js

const fs = require('fs');
const path = require('path');

const projectImages = [
  // Examinaite
  'examinaite-hero.jpg',
  'examinaite-dashboard.jpg', 
  'examinaite-questions.jpg',
  'examinaite-pdf.jpg',
  
  // GlórAI
  'glorai-hero.jpg',
  'glorai-chat.jpg',
  'glorai-voice.jpg',
  
  // Dr Ónán Weddings
  'dronan-hero.jpg',
  'dronan-gallery.jpg',
  'dronan-contact.jpg',
  
  // The Kneecapp
  'kneecapp-hero.jpg',
  'kneecapp-lyrics.jpg',
  'kneecapp-translation.jpg'
];

const imagesDir = path.join(__dirname, '..', 'public', 'images', 'projects');

// Create a simple SVG placeholder
function createPlaceholderSVG(filename, width = 800, height = 600) {
  const projectName = filename.split('-')[0];
  const imageType = filename.split('-').slice(1).join(' ').replace('.jpg', '');
  
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#1a1a1a"/>
    <text x="50%" y="40%" font-family="Arial, sans-serif" font-size="24" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">
      ${projectName.toUpperCase()}
    </text>
    <text x="50%" y="60%" font-family="Arial, sans-serif" font-size="16" fill="#888888" text-anchor="middle" dominant-baseline="middle">
      ${imageType}
    </text>
  </svg>`;
}

// Create placeholder images
projectImages.forEach(filename => {
  const filepath = path.join(imagesDir, filename);
  const isHero = filename.includes('hero');
  const width = isHero ? 1200 : 800;
  const height = isHero ? 600 : 600;
  
  const svgContent = createPlaceholderSVG(filename, width, height);
  
  // Save as SVG (can be displayed as image)
  const svgFilename = filename.replace('.jpg', '.svg');
  const svgPath = path.join(imagesDir, svgFilename);
  
  fs.writeFileSync(svgPath, svgContent);
  console.log(`Created placeholder: ${svgFilename}`);
});

console.log('\nPlaceholder images created successfully!');
console.log('Replace these SVG files with actual project screenshots when available.');


