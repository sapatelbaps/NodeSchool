// Module12 - HTTP UPPERCASERER - Write an HTTP server that receives only POST reqs and converts incoming POST body characters to upper-case and returns it to the client. - Copied the solution :(
// node module12.js 8000

var http = require("http");
var map = require("through2-map");

var server = http.createServer(function(req, res) {
  if (req.method == "POST") {
    req.pipe(
        map(function(chunk) {
          return chunk.toString().toUpperCase();
        })
      ).pipe(res);
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
