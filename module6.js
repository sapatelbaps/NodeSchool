// Create one independent module to be used as expected contract by anyone.
// Function(arg1,arg2,arg3) contract to be used by the caller.
var path = require("path");
var fs = require("fs");

module.exports = function(dirPath, filterExtValue,callback) {

  const isEmpty = function(input) {
    if (typeof input === "array") {
      return input.length === 0;
    }
    return !input || Object.keys(input).length === 0;
  };
  
  if (dirPath.isEmpty) return callback('');
  
  if (filterExtValue.isEmpty){
    console.log("Warning: No filter extension value is provided so all files from the directory are listed.");
    callback('');
    }

  fs.readdir(dirPath, function(error, files) {
    /* var logFilePath = 'E:\\PersonalGit\\sapatelbaps\\NodeSchool\\Logs\\LogFile-' + String(Math.floor((Math.random() * 1000) + 1)) + '.txt';    
    var logData = dirPath.concat(' : Files => ',files.length.toString());
    //console.log(logData);
    fs.writeFile(logFilePath,logData,(err) => {
      if (err) return callback(err);
    }); */

    if (error) return callback(error);
    if (files.length == 0) return callback(error);
    
    files.forEach(element => {
      if (path.extname(element) === `.${filterExtValue}`)
        callback(element);
    });
  });
};
