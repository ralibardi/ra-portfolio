// manifestGenerator.js
import fs from 'fs';
import handlebars from 'handlebars';
import * as sass from 'sass';

export function generateManifest() {
  // Read _colours.scss
  const scssContent = fs.readFileSync('src/_colours.scss', 'utf8');

  // Compile SCSS to CSS
  const cssResult = sass.compileString(scssContent);

  // Extract $primary-blue value
  const primaryColourMatch = cssResult.css.match(
    /--primary-colour:\s*(#[0-9a-fA-F]{6});/
  );
  const primaryColour = primaryColourMatch ? primaryColourMatch[1] : '#ffffff';

  // Extract $black value
  const blackColourMatch = cssResult.css.match(
    /--black:\s*(#[0-9a-fA-F]{6});/
  );
  const blackColour = blackColourMatch ? blackColourMatch[1] : '#000000';

  // Read manifest.hbs template
  const manifestTemplate = fs.readFileSync('manifest.hbs', 'utf8');

  // Compile Handlebars template
  const template = handlebars.compile(manifestTemplate);

  // Generate manifest.json with dynamic color
  const manifestContent = template({ primaryColour, blackColour });

  // Write the final manifest.json to the dist folder
  fs.writeFileSync('./manifest.json', manifestContent);
}
