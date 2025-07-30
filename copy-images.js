const fs = require('fs');
const path = require('path');

// Copy the Taza app screenshots
try {
  // Copy property listings screenshot
  fs.copyFileSync(
    path.join(__dirname, 'attached_assets', 'Screenshot (29)_1753805295945.png'),
    path.join(__dirname, 'public', 'taza-property-listings.png')
  );
  
  // Copy property detail screenshot  
  fs.copyFileSync(
    path.join(__dirname, 'attached_assets', 'Screenshot (29)_1753804539136.png'),
    path.join(__dirname, 'public', 'taza-property-detail.png')
  );
  
  console.log('Taza images copied successfully!');
} catch (error) {
  console.error('Error copying files:', error);
}
