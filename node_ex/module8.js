// Module 8 - http.get request. Print two lines - count and all data in second line.
// Not working as expected because don't know when ondata will be completed!
// node module8.js http://www.classical.net
http = require('http');
var fullData = '';

http.get(process.argv[2],function callback (response) {
    response.setEncoding('utf8');
    //console.log("Got response: " + response.statusCode);
    response.on('data',showData);
    console.log('finished on data call.');
    
    fullData = fullData.replace('\n','');
    console.log(fullData);
    
})
.on('error', showError);

function showData(data){
    //console.log(data);
    fullData = fullData + data;
    console.log('inside');
    //console.log(fullData.length);
}

function showError(e) {
    console.log("Got error: " + e.message);
}