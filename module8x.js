// Module 8 - http.get request. Print two lines - count and all data in second line.
// node module8x.js http://www.classical.net
// https://stackoverflow.com/questions/37899263/pipe-function-in-node-and-http-get

http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err);
      data = data.toString();
      console.log(data.length);
      console.log(data);
            // Replace new line with empty character
      // console.log(data.toString().replace(/\n/g,''));
    }));
  }).on('error', showError);

function showError(e) {
    console.log("Got error: " + e.message);
}