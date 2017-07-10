var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
	if (!req.session.username){
		req.flash('error', 'Please login first!');
		res.redirect('/');
	}
	else{
	var session = req.session;
	var curUsername = session.username;
	console.log("SESSION.username, ACCOUNTINFORMATION: " + curUsername);
	User.findOne({username: curUsername}, function(err, user, count){
		
		res.render('accountinformation', {title: 'MickeyShop', session: session, userinfo: user});
	});
	}
});




module.exports = router;
