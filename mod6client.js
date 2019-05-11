// Client of module6.js
// usage: 

var module6 = require('./module6.js');

module6('E:\PersonalGit\sapatelbaps\NodeSchool','js',
    function callBack(err,files){
        //console.log('hello');        
    files.forEach(element => {
        console.log(element);        
    });
});