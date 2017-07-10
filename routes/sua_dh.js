var express = require('express');
var router = express.Router();
var order = require('../models/donhangs');

/* GET editsanpham page. */
router.get('/', function(req, res, next) {

	if(req.session.admin){
		console.log('EDIT DON HANG');
		var donhangid = req.query['id'];
		var session = req.session;
		var ma = "";
		var ten ="";
		var email ="";
		var diachi ="";
		var tongtien ="";
		var giohang ="";
		var trangthai ="";
		var sodienthoai ="";

		order.findOne({_id: donhangid }, function(err, donhanglaydc, count){
			console.log(donhanglaydc);
			ten = donhanglaydc.hoten;
			email = donhanglaydc.email;
			diachi = donhanglaydc.diachi;
			tongtien = donhanglaydc.tongtien;
			giohang = donhanglaydc.giohang;
			trangthai = donhanglaydc.trangthai;
			sodienthoai = donhanglaydc.sodienthoai;

			console.log('HO TEN NE '+ten+' EMAIL NE '+email);
		});
		
		order.find(function(err, orders, count){
			res.render('donhang', {title: 'MickeyShop',id: donhangid, editten: ten, editloaisp: email, edithangsp: diachi, editgia: tongtien, editsoluong: giohang, editmota: trangthai, editsdt: sodienthoai, donhangs: orders,session: session});
		});

	}
	else{
		res.redirect('/admin');
	}
	
});

router.post('/', function(req, res) {
	var donhangid = req.body.id;
	var editma = req.body.ma;
	var editten = req.body.hoten;
	var editloaisp = req.body.mail;
	var edithangsp = req.body.addr;
	var editgia = req.body.total;
	console.log('TONG TIEN '+editgia);
	var editsoluong = req.body.cart;
	var editmota = req.body.state;
	var editsdt = req.body.sdt;

	var condition = {'_id': donhangid};
	var doc = {'ma':editma,'hoten':editten, 'email': editloaisp, 'diachi': edithangsp, 'tongtien': editgia, 'giohang': editsoluong, 'trangthai': editmota, 'sodienthoai': editsdt };
	order.findOneAndUpdate(condition, doc , {upsert: true}, function(err, doc){
	    if(err){
	        console.log(err);
	        return err;
	    }
	    else{
	    	 console.log(doc);
	    	res.redirect('/donhang');
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
