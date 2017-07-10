var express = require('express');
var router = express.Router();
var order = require('../models/donhangs');

/* GET donhang page. */
router.get('/', function(req, res, next) {
	if(req.session.admin){
			var session = req.session;
			order.find(function(err,orders,count){
		  		res.render('donhang', { title: 'Quản lý đơn hàng',id: "", editma: "", editten: "", editloaisp: "", edithangsp: "", editgia:"", editsoluong: "", editmota: "", editsdt: "",  donhangs: orders, session:session });

			});
	}else{
		res.redirect('/admin');
	}
	
});

module.exports = router;
