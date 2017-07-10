var express = require('express');
var router = express.Router();
var user = require('../models/users');

router.post('/',function(req, res){
		var tv_them = new user({
			"username": req.body.uname,
			"password": req.body.pass,
			"hoten": req.body.hten,
			"sdt": req.body.dthoai,
			"email": req.body.email,
			"diachi": req.body.dchi,
		});
          console.log("THEM THANH VIEN NE "+tv_them);
		tv_them.save(function(err){
			if(err){
	          return err;
        	}
        	else{
          console.log("thanh vien added");
          res.redirect('/thanhvien');
        	}
		});
});


module.exports = router;