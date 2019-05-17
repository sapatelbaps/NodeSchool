// Module 7 - http.get request.
// node module7.js http://www.classical.net
http = require('http');

http.get(process.argv[2],function callback (response) {
    response.setEncoding('utf8');
    //console.log("Got response: " + response.statusCode);
    response.on('data',showData);    
  }).
on('error', showError);

function showData(data){
    console.log(data);    
}

function showError(e) {
    console.log("Got error: " + e.message);
}
