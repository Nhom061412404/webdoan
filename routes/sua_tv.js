var express = require('express');
var router = express.Router();
var user = require('../models/users');

/* GET editsanpham page. */
router.get('/', function(req, res, next) {
	if(req.session.admin){
		console.log('EDIT THANH VIEN');
		var thanhvienid = req.query['id'];
		var session = req.session;
		var uname = "";
		var pass ="";
		var hten ="";
		var sdt ="";
		var eamil ="";
		var dchi ="";


			console.log('ID THANH VIEN NE'+thanhvienid);
		user.findOne({_id: thanhvienid }, function(err, thanhvienlaydc, count){
			console.log('THANH VIEN LAY DUOC '+thanhvienlaydc.sdt);
			uname = thanhvienlaydc.username;
			pass = thanhvienlaydc.password;
			hten = thanhvienlaydc.hoten;
		 	sdt = thanhvienlaydc.sdt;
			email = thanhvienlaydc.email;
			dchi = thanhvienlaydc.diachi;

			console.log('ID THANH VIEN NE'+thanhvienid);
			//res.render('sanpham', {title: 'MickeyShop',editma: sanphamlaydc.ma_sp, editten: sanphamlaydc.ten_sp, editloaisp: sanphamlaydc.loai_sp, edithangsp: sanphamlaydc.hang_sp, editgia: sanphamlaydc.gia_sp, editsoluong: sanphamlaydc.soluong_sp, editmota: sanphamlaydc.mota_sp, sanphams: sanphamlaydc,session: session});
		});

		user.find(function(err, users, count){
			res.render('thanhvien', {title: 'MickeyShop',id: thanhvienid, editma: pass, editten: uname, editloaisp: hten, edithangsp: sdt, editgia: email, editsoluong: dchi, users: users,session: session});
		});
	}
	else{
		res.redirect('/admin');
	}
	

});

router.post('/', function(req, res) {
	var thanhvienid = req.body.id;
	var editma = req.body.pas;
	var editten = req.body.uname;
	var editloaisp = req.body.hten;
	var edithangsp = req.body.sdt;
	var editgia = req.body.email;
	var editsoluong = req.body.dchi;


	console.log(thanhvienid);
	console.log(editsoluong);
	var condition = {'_id': thanhvienid};
	var doc = {'username':editten, 'hoten': editloaisp, 'sdt': edithangsp, 'email': editgia, 'diachi': editsoluong, 'password': editma };
	user.findOneAndUpdate(condition, doc , {upsert: true}, function(err, doc){
	    if(err){
	        console.log(err);
	        return err;
	    }
	    else{
	    	 console.log(doc);
	    	res.redirect('/thanhvien');
	    }
	   
	});



});
/*
router.get('/', function(req, res, next) {
	var sanphamid = req.query['id'];
	var session = req.session;

	product.findOne({_id: sanphamid }, function(err, sanphamlaydc, count){
		console.log(sanphamlaydc);
		console.log(sanphamlaydc.ma_sp);
		res.render('sanpham', {title: 'MickeyShop',editma: sanphamlaydc.ma_sp, editten: sanphamlaydc.ten_sp, editloaisp: sanphamlaydc.loai_sp, edithangsp: sanphamlaydc.hang_sp, editgia: sanphamlaydc.gia_sp, editsoluong: sanphamlaydc.soluong_sp, editmota: sanphamlaydc.mota_sp, sanphams: sanphamlaydc,session: session});
	});
	
});*/


module.exports = router;
