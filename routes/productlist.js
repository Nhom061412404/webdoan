var express = require('express');
var router = express.Router();
var sanpham = require('../models/sanpham');
var mongoose = require('mongoose');

require('mongoose-middleware').initialize(mongoose);

/* GET home page. */

// router.get('/', function (req, res, next) {
//     var options = {
//         start: req.query.page ? (req.query.page - 1) : 0,
//         count: 3
//     };
//     Order.find({}).populate('user')
//         .page(options, function (err, docs) {
//             if (err) return next(err);
//             max_page = parseInt((docs.total / options.count) + (docs.total % options.count === 0 ? 0 : 1));
//             res.render('pages/orders/index', {orders: docs.results, page: req.query.page || 1, max_page: max_page})
//         });
// });

router.get('/', function(req, res, next) {
	var brand = req.query['brand'];
	var type = req.query['type'];
	var under = req.query['under'];
	var above = req.query['above'];
	var page = req.query['page'];
	var options = {
        start: req.query.page ? (req.query.page - 1) : 0,
        count: 12
    };
	console.log("DA VAO TRONG PRODUCTLIST/////////////////////////");
	var session = req.session;
	if(page==undefined)
	{
	if(brand== undefined && type == undefined && above == undefined  && under == undefined)
	{
		sanpham.find(function(err, sanphams, count){
			res.render('productlist', {title: 'MickeyShop', sanphams: sanphams,session: session});
		});
	}else{
		if(brand != undefined && type != undefined) //Xử lý phức tạp
		{

		}else{
			if(brand != undefined){
				 		sanpham.find({ 'hang_sp': brand }, function(err, sanphams, count){
				 			res.render('productlist', {title: 'MickeyShop', sanphams: sanphams,session: session});
						});
			}
			if(type != undefined){
				 		sanpham.find({ 'loai_sp': type }, function(err, sanphams, count){
				 			res.render('productlist', {title: 'MickeyShop', sanphams: sanphams,session: session});
						});
			}

		}

		if(under != undefined && above != undefined)
		{			
					console.log(under + "          " + above);
			 		sanpham.find({ 'gia_sp': {$lt: under, $gt: above} }, function(err, sanphams, count){
			 			res.render('productlist', {title: 'MickeyShop', sanphams: sanphams,session: session});
					});
		}
		if(under!= undefined){
			 		sanpham.find({ 'gia_sp': {$lt: under} }, function(err, sanphams, count){
			 			res.render('productlist', {title: 'MickeyShop', sanphams: sanphams,session: session});
					});
		}
		if(above!= undefined){
			 		sanpham.find({ 'gia_sp': {$gt: above} }, function(err, sanphams, count){
			 			res.render('productlist', {title: 'MickeyShop', sanphams: sanphams,session: session});
					});
		}
  	}
  	}else{

    sanpham.find({}).populate('sanpham')
        .page(options, function (err, docs) {
            if (err) return next(err);
            max_page = parseInt((docs.total / options.count) + (docs.total % options.count === 0 ? 0 : 1));
            res.render('productlist', {title: 'MickeyShop', sanphams: docs.results,session: session, page: req.query.page || 1, max_page: max_page});
        });

  	}
});

module.exports = router;
