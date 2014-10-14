var http = require('http');
var config = require('./config');

var server = http.createServer(function (req, res) {
  res.writeHead(config.code);
  res.end();
});

server.listen(config.port);
