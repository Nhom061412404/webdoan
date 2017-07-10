var express = require('express');
var router = express.Router();
var product = require('../models/sanphams');

/* GET sanpham page. */
router.get('/', function(req, res, next) {

	if(req.session.admin){
		var sanphamid = req.query['id'];
		var session = req.session;

		product.remove({_id : sanphamid}, function(err){
			console.log(sanphamid);
			if (!err) {
			     console.log("Da xoa");
			}
			else {
			          console.log(err);
			}	
		});

		res.redirect('/sanpham');
	}
	else{
		res.redirect('/admin');
	}
	
	
});


module.exports = router;
