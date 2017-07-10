var express = require('express');
var router = express.Router();
var order = require('../models/donhangs');

/* GET sanpham page. */
router.get('/', function(req, res, next) {

	if(req.session.admin){
		var donhangid = req.query['id'];
			var session = req.session;

			order.remove({_id : donhangid}, function(err){
				console.log(donhangid);
				if (!err) {
				     console.log("Da xoa");
				}
				else {
				          console.log(err);
				}	
			});

			res.redirect('/donhang');
	}
	else{
		res.redirect('/admin');
	}
	
	
});


module.exports = router;
