// read file and show number of \n new line chars.
var fs = require('fs');
function finishedReading(error, data){
    if (error) return console.error(error);

    var lines = data.toString().split('\n').length;
    if(lines >=1 )
    console.log(lines - 1);
}
var contentBuffer = fs.readFile(process.argv[2], finishedReading);