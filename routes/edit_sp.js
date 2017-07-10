var express = require('express');
var router = express.Router();
var product = require('../models/sanphams');

/* GET editsanpham page. */
router.get('/', function(req, res, next) {
	if(req.session.admin){
		console.log('EDIT SAN PHAM');
		var sanphamid = req.query['id'];
		var session = req.session;
		var ma = "";
		var ten ="";
		var loaisp ="";
		var hangsp ="";
		var gia ="";
		var soluong ="";
		var mota ="";

		product.findOne({_id: sanphamid }, function(err, sanphamlaydc, count){
			console.log(sanphamlaydc);
			console.log(sanphamlaydc.ma_sp);
			ma = sanphamlaydc.ma_sp;
			ten = sanphamlaydc.ten_sp;
			loaisp = sanphamlaydc.loai_sp;
		 	hangsp = sanphamlaydc.hang_sp;
			gia = sanphamlaydc.gia_sp;
			soluong = sanphamlaydc.soluong_sp;
			mota = sanphamlaydc.mota_sp;

			console.log(ten);
			//res.render('sanpham', {title: 'MickeyShop',editma: sanphamlaydc.ma_sp, editten: sanphamlaydc.ten_sp, editloaisp: sanphamlaydc.loai_sp, edithangsp: sanphamlaydc.hang_sp, editgia: sanphamlaydc.gia_sp, editsoluong: sanphamlaydc.soluong_sp, editmota: sanphamlaydc.mota_sp, sanphams: sanphamlaydc,session: session});
		});

		product.find(function(err, products, count){
			res.render('sanpham', {title: 'MickeyShop',id: sanphamid, editma: ma, editten: ten, editloaisp: loaisp, edithangsp: hangsp, editgia: gia, editsoluong: soluong, editmota: mota, sanphams: products,session: session});
		});
	}
	else{
		res.redirect('/admin');
	}

	

});

router.post('/', function(req, res) {
	var sanphamid = req.body.id;
	var editma = req.body.ma;
	var editten = req.body.ten;
	var editloaisp = req.body.loai;
	var edithangsp = req.body.hang;
	var editgia = req.body.gia;
	var editsoluong = req.body.soluong;
	var editmota = req.body.mota;


	console.log(sanphamid);
	console.log(editsoluong);
	var condition = {'_id': sanphamid};
	var doc = {'ten_sp':editten, 'loai_sp': editloaisp, 'hang_sp': edithangsp, 'gia_sp': editgia, 'soluong_sp': editsoluong, 'mota_sp': editmota };
	product.findOneAndUpdate(condition, doc , {upsert: true}, function(err, doc){
	    if(err){
	        console.log(err);
	        return err;
	    }
	    else{
	    	 console.log(doc);
	    	res.redirect('/sanpham');
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
