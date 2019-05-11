// read file and show number of \n new line chars.
// usage: node module3.js pathofthefile_to_get_newline_characters.
var fs = require('fs');
var contentBuffer = fs.readFileSync(process.argv[2]);
var data = contentBuffer.toString();
var lines = data.split('\n').length;
if(lines >=1 )
console.log(lines - 1);
