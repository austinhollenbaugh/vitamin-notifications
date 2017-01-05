var config = require('../config.js'),
    client = require('twilio')(config.twilioSID, config.twilioAuthToken);

module.exports = {
  sendText: (req, res, next) => {
    // console.log(req.body);
    client.sendMessage({
      to: req.body.to,
      from: req.body.from,
      body: req.body.message
    }, function(err, message) {
      if (err) {
        res.json(err);
      } else {
        // console.log(message);
        res.json(message);
      }
    });
  },
  receiveText: (req, res, next) => {
    //can't do this until i'm hosted, because it has to hit a public server
    //go here when I'm ready to try it
    //https://www.twilio.com/docs/quickstart/node/programmable-sms#receiving-sms-messages
  }
};
