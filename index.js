var express = require('express');
var app = express();

app.use(express.static('www'));

app.get('/', function (req, res) {
  res.sendfile(__dirname+'/www/index.html');
});

app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
});

