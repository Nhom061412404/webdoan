var express = require('express');
var router = express.Router();
var thanhvien = require('../models/users');

/* GET thanhvien page. */
router.get('/', function(req, res, next) {
	if(req.session.admin){
			var session = req.session;
			thanhvien.find(function(err,users,count){
		  		res.render('thanhvien', { title: 'Quản lý thành viên',id: "", editma: "", editten: "", editloaisp: "", edithangsp: "", editgia:"", editsoluong: "", editmota: "", users: users,session: session});
			});
	}
	else{
		res.redirect('/admin');
	}
	
});

module.exports = router;
