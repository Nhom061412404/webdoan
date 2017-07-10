var express = require('express');
var router = express.Router();
var product = require('../models/sanphams');

/* GET sanpham page. */
router.get('/', function(req, res, next) {
	


	if(req.session.admin){
		var session = req.session;
		console.log(session);
		product.find(function(err, products, count){
			res.render('sanpham', {title: 'Quản lý sản phẩm',id: "", editma: "", editten: "", editloaisp: "", edithangsp: "", editgia:"", editsoluong: "", editmota: "", sanphams: products, session: session});
		});
	}
	else{
		res.redirect('/admin');
	}
});


module.exports = router;
