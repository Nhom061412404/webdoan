var express = require('express');
var router = express.Router();
var donhang = require('../models/donhangs');

router.post('/', function(req, res){

	if(req.session.admin){
				var dh_them = new donhang({
					"hoten": req.body.ten,
					"email": req.body.mail,
					"sodienthoai": req.body.sdt,
					"diachi": req.body.addr,
					"tongtien": req.body.total,
					"giohang": req.body.cart,
					"trangthai": req.body.state,
				});
			console.log('TEN DON HANG '+dh_them.hoten+' STATE DON HANG '+dh_them.trangthai);
				dh_them.save(function(err){
					if(err){
			          return err;
		        	}
		        	else{
		          console.log("don hang added");
		          res.redirect('/donhang');
		        	}
				});
	}
	else{
		res.redirect('/admin');
	}
		
});


module.exports = router;