var config = require('../config.js'),
    client = require('twilio')(config.twilioSID, config.twilioAuthToken);

module.exports = {
  sendText: function (req, res, next) {
    client.sendMessage({
      to: req.body.to,
      from: req.body.from,
      body: req.body.message
    }, function(err, message) {
      if (err) {
        res.json(err);
      }
    });
  }
};
