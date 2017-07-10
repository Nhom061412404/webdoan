var express = require('express');
var router = express.Router();
var sanpham = require('../models/sanpham');

/* GET home page. */
router.get('/', function(req, res, next) {
	var id = req.query['id'];
	var session = req.session;
  	sanpham.findById(id, function(err, sanphams, count){
  	res.render('productdetail', {title: 'MickeyShop', sanpham: sanphams, session: session});
  });
});


module.exports = router;
