var express = require('express');
var router = express.Router();
var sanpham = require('../models/sanpham');
var User = require('../models/user');

router.post('/', function(req, res) {
  console.log("LOGIN REQ: " + req);
  var username = req.body.username;
  var password = req.body.password;
  console.log(username + " - " + password);

  User.findOne({username: username, password: password}, function(err, user) {
    if (err) {
      return done(err);
    }
    if (!user) { console.log("Not valid username or password");
      //res.render('login', {title: 'Log in', error: 'Invalid username or password!', csrfToken: req.csrfToken()});
      res.redirect('/');
    } else {
      req.session.username = username;
      req.session.hoten = user.hoten;
      console.log(user);
      console.log(user.hoten);
      console.log(req.session.hoten);
      req.session.userid = user._id;
      console.log(req.session);
      res.redirect('/');
    }
  });
});


module.exports = router;
