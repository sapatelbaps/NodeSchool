/* 
HTTP JSON API SERVER -  HTTP server that serves JSON data when it receives a GET request to the path 
'/api/parsetime'.
The JSON response should contain only 'hour', 'minute' and 'second'
  properties. For example:

     {
       "hour": 14,
       "minute": 23,
       "second": 15
     } 
Add second endpoint for the path '/api/unixtime' which accepts the same
  query string but returns UNIX epoch time in milliseconds (the number of
  milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
  For example:

     { "unixtime": 1376136615474 }
*/
// node module13.js 8000 /api/parsetime?iso=2013-08-10T12:10:15.474Z

var http = require("http");
var url = require("url");

var server = http.createServer(function(req, res) {
  if (req.method == "GET") {
    var x = url.parse(req.url, true);
    var pathSegments = x.pathname.split("/");
    var type = pathSegments[pathSegments.length - 1];
    var isoDate = x.search.slice(1, x.search.length).split("=")[1];
    var dateValue = new Date(isoDate);
    var jsonData;
    res.writeHead(200, { "Content-Type": "application/json" });
    
    if (type.toLowerCase() === "parsetime") {
        res.end(JSON.stringify({
        hour: dateValue.getHours(),
        minute: dateValue.getMinutes(),
        second: dateValue.getSeconds()
      }));
    } else if (type.toLowerCase() === "unixtime") {
        res.end(JSON.stringify({ unixtime: dateValue.getTime() }));
    }
  }
});

server.on("error", function(e) {
  if (e.code == "EADDRINUSE") {
    // console.log('Address in use, retrying...');
    setTimeout(function() {
      server.close();
      server.listen(PORT, HOST);
    }, 1000);
  }
});

server.listen(Number(process.argv[2]));
