const notion = require('notionapi-agent');
const openai = require('openai-agent');

// Get 'Backlog v2' database item
const item = await notion.getDatabaseItem('Backlog v2');

// Create prompt based on 'Detailed text to image description (prompt) for '{itemName}', describe materials, scene, lightning, camera:'
let prompt = `Detailed text to image description (prompt) for "${item.name}", describe materials, scene, lightning, camera:`;

// Add prompt to item
item.prompt = prompt;

// Render image with OpenAI Dalle-2 API
const image = await openai.renderImage(item.prompt);

// Add image to item
item.image = image;

// Add image to Notion
await notion.addImageToDatabaseItem(item);

// Save update to Notion
// await notion.updateDatabaseItem(item);

// To run this script, run the following command:
// node index.js

// To install dependencies, run the following command:
// npm install

// To install npm on Mac, run the following command:
// brew install npm

// To install brew on Mac, run the following command:
// /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"