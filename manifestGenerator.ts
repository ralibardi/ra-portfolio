// manifestGenerator.js
import fs from 'fs';
import handlebars from 'handlebars';

export function generateManifest() {
  // Read _colours.scss
  const scssContent = fs.readFileSync('src/assets/_colours.scss', 'utf8');

  // Extract primary-1 colour value
  const primaryColourMatch = scssContent.match(
    /\$primary-1:\s*(#[0-9a-fA-F]{6});/,
  );
  const primaryColour = primaryColourMatch ? primaryColourMatch[1] : '#ffffff';

  // Extract white colour value
  const whiteColourMatch = scssContent.match(/\$white:\s*(#[0-9a-fA-F]{6});/);
  const whiteColour = whiteColourMatch ? whiteColourMatch[1] : '#000000';

  // Read manifest.hbs template
  const manifestTemplate = fs.readFileSync('manifest.hbs', 'utf8');

  // Compile Handlebars template
  const template = handlebars.compile(manifestTemplate);

  // Generate manifest.json with dynamic color
  const manifestContent = template({ primaryColour, whiteColour });

  // Write the final manifest.json to the dist folder
  fs.writeFileSync('public/manifest.json', manifestContent);
}
