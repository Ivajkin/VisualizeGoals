const notion = require('notionapi-agent');

// Get 'Backlog v2' database item
const item = await notion.getDatabaseItem('Backlog v2');

// Create prompt based on 'Detailed text to image description (prompt) for '{itemName}', describe materials, scene, lightning, camera:'
let prompt = ;

// Add prompt to item
item.prompt = prompt;

// Save update to Notion
await notion.updateDatabaseItem(item);
