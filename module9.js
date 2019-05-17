// Module 9 - JUGGLING ASYNC.
// node module9.js http://www.classical.net http://www.classical.net http://www.classical.net

http = require('http');
var bl = require('bl');

var queue = []; 
var counter = 0; // separate variable is  required to make sure all requests are completed because it works async.

for (let index = 2; index < 5; index++) {
    //console.log(process.argv[index]);
    downloadWebsiteData(process.argv[index]);
}

function downloadWebsiteData(requestURL) {
    http.get(requestURL, function (response) {
        response.pipe(bl(function (err, data) {
            if (err)
                return console.error(err);
            // data = requestURL + ':' + data.toString();
            data = data.toString();
            queue.push(data);
            counter++;
            //console.log(requestURL + ':' + queue.length);
            if(counter == 3)
            {                
                for (const q of queue) {
                    //console.log(requestURL + ':' + q);
                    console.log(q);
                }
            }
        }));
    }).on('error', showError);
}

function showError(e) {
    console.log("Got error: " + e.message);
}