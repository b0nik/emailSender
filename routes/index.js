var express = require('express');
var router = express.Router();
var mail = require('../libs/emailSender/Email');
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/post',function(req,res,next){
  var email = {
    to: [req.body.email],
    from: 'roger@tacos.com',
    subject: req.body.sub,
    text: req.body.text,
    html: req.body.text
  };

  mail.sendgrid.send(email, function(err, response) {
    if (err) {
      console.log(err)
    }
    console.log("was send to "+email.to+" at "+ new Date()+"=====status "+response.message);
    res.redirect('/');
  });
});

module.exports = router;
