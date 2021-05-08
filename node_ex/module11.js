// Module 11 - http server. First argument - port, second argument - path of txt file.
// node module11.js 8000 ''
//
var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {
  res = PrepareResponse(process.argv[3], res);
});

var PrepareResponse = function(srcFile, response) {
  readStream = fs.readFile(srcFile, function(err, data) {
    if (err) console.log(err);
    console.log(data.toString());
  });

  src = fs.createReadStream(srcFile);
  dst = fs.createWriteStream('C:\\Dell\\file.txt');
  src.pipe(dst);

  response.writeHead(200, {
    "Content-Length": 1000,
    "Content-Type": "text/plain"
  });
  
  console.log("setting response");
  src.on('data', function(chunk) {
  response.write(chunk);
  console.log(chunk);  
  response.end();
});
};

server.on("error", function(e) {
  if (e.code == "EADDRINUSE") {
    // console.log('Address in use, retrying...');
    setTimeout(function() {
      server.close();
      server.listen(PORT, HOST);
    }, 1000);
  }
});

// Start listening on the server.
server.listen(process.argv[2], "localhost", function() {
  address = server.address();
  //console.log(`Inside server.listen method : %j`, address);
});
