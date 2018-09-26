var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname)));
app.use("/background", express.static(__dirname + '/background'));
app.use("/weather/", express.static(__dirname + '/weather'));
 
// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/weather/index.html'));
});
 app.listen(process.env.PORT || 8080);