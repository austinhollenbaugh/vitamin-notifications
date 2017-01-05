//dependencies
var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    twilio = require('twilio');

//external files needed
var config = require('./server/config.js'),
    twilioCtrl = require('./server/controllers/twilioCtrl.js');

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/text', twilioCtrl.sendText);


var port = config.serverPort;
app.listen(port, function() {
  console.log('listening on port', port);
});
