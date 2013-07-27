var fs = require('fs');
var express = require('express');
var buffer = new Buffer(fs.readFileSync("index.html"));
var content = buffer.toString();
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
