var express = require('express');
var router = express.Router();
var sanpham = require('../models/sanpham');

/* GET home page. */



router.post('/', function(req, res, next) {
	var searchPhrase = req.body.value;
	var session = req.session;
	console.log(searchPhrase);
	
	sanpham.find({ 'ten_sp': { "$regex": searchPhrase, "$options": "i" } }, function(err, sanphams, count){
		res.render('productlist', {title: 'MickeyShop', sanphams: sanphams, session: session});
	});
});

module.exports = router;
