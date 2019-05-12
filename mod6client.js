// Client of module6.js
// usage as below:
//module6("E:\\PersonalGit\\sapatelbaps\\NodeSchool", "js", localFunc);

var module6 = require("./module6.js");
module6(process.argv[2],process.argv[3],localFunc);

function localFunc(fileName){
    console.log(fileName);    
}
