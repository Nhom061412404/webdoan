var express = require('express');
var router = express.Router();
var user = require('../models/users');

/* GET sanpham page. */
router.get('/', function(req, res, next) {
	if(req.session.admin){
		var thanhvienid = req.query['id'];
			var session = req.session;

			user.remove({_id : thanhvienid}, function(err){
				console.log(thanhvienid);
				if (!err) {
				     console.log("Da xoa");
				}
				else {
				          console.log(err);
				}	
			});

			res.redirect('/thanhvien');
	}
	else{
		res.redirect('/admin');
	}
	
	
});


module.exports = router;
