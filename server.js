import express, { static } from 'express';
var app = express();
import { join } from 'path';

app.use(static(join(__dirname)));
app.use("/background", static(__dirname + '/background'));
app.use("/weather/", static(__dirname + '/weather'));

// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
  res.sendFile(join(__dirname + '/weather/index.html'));
});

app.listen(process.env.PORT || 8080);