// Create one independent module to be used as expected contract by anyone.
// Function(arg1,arg2,arg3) contract to be used by the caller.
var path = require("path");
var fs = require("fs");

module.exports = function(dirPath, filterExtValue,callback) {
  if (dirPath.isEmpty) return "Please provide valid directory path.";
  
  if (filterExtValue.isEmpty)
    console.log(
      "Warning: No filter extension value is provided so all files from the directory are listed."
    );

  fs.readdir(dirPath, function(error, files) {
    if (error) { 
        return error;
    }
    
    if (files.length == 0) return "Empty directory.";

    // Need to improve extension checking condition.
    files.forEach(element => {
      if (path.extname(element) == "." + filterExtValue)
        callback(element);
    });
    //return filteredFiles;

  });
};

const isEmpty = function(input) {
  if (typeof input === "array") {
    return input.length === 0;
  }
  return !input || Object.keys(input).length === 0;
};
