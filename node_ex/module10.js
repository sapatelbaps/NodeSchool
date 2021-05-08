// Module 10 - TCP TIME SERVER.
// node module10.js 8000
// https://github.com/samsonjs/strftime#locales - yet not used.
// https://stackoverflow.com/questions/1267283/how-can-i-pad-a-value-with-leading-zeros - "chetbox" answer is best.

var net = require("net");
var strftime = require("strftime"); // not required in browsers

var today = new Date();
var server = net.createServer(function(socket) {
  // socket handling logic
  var strftimePDT = strftime.timezone(-420);
  //console.log(strftimePDT('%F %T', new Date(1307472705067)));
  var data = ""; //strftime.localizeByIdentifier('en_CA');
  data =
    today.getFullYear().toString() +"-"+
    ("00" + (today.getMonth()+1)).slice(-2).toString() +"-"+
    ("00" + today.getDate()).slice(-2).toString("%d2") +" " +
    ("00" + today.getHours()).slice(-2).toString() +":"+
    ("00" + today.getMinutes()).slice(-2).toString()+"\n";
  //console.log(data);
  socket.end(data);
});
server.listen(process.argv[2]);
