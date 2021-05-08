// read the file names from the directory and filter files from provided second argument as to which extensions.
// usage: node module5.js E:\PersonalGit\sapatelbaps\NodeSchool js
var fs = require('fs');
var path = require('path');

function filterFilesFromDir(error, filesList){
    if (error) return console.error(error);

    var files = filesList.length;
    filesList.forEach(element => {        
        if(path.extname(element) == `.${process.argv[3]}`)
            console.log(element);
    });
}

var contentBuffer = fs.readdir(process.argv[2], filterFilesFromDir);