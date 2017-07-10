var express = require('express');
var router = express.Router();
var passport = require('passport');

var Admin = require('../models/admin');

/* GET dangnhap page. */
router.get('/', function(req, res, next) {
  console.log(req.session);
  res.render('dangnhap', { title: 'Đăng nhập',session: req.session});
});

router.post('/', passport.authenticate('local.admin', {
  successRedirect: '/sanpham',
  failureRedirect: '/dangnhap',
  failureFlash: true
}));


module.exports = router;
/*
router.post('/',
  passport.authenticate('local.login'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    req.session.admin = 1;
    res.redirect('/sanpham/');
  });
*/