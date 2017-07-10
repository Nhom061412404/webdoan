var express = require('express');
var router = express.Router();
var sanpham = require('../models/sanpham');
var Cart = require('../models/cart');


var passport = require('passport');

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  sanpham.find(function(err, sanphams, count){
  	res.render('index', {title: 'MickeyShop', sanphams: sanphams});
  });
});
*/

router.post('/', passport.authenticate('local.login', {
  successRedirect: '/accountinformation',
  failureRedirect: '/login',
  failureFlash: true
}));


router.get('/', renderSanPhamBanChay, renderSanPhamDacSac);

function renderSanPhamBanChay(req, res, next){
	sanpham.find({ 'sale_sp': true }, function(err, sanphams, count){
  			req.banchay = sanphams;
  			next();
 		});
};

 function renderSanPhamDacSac(req, res){
 	
			
	sanpham.find({ 'new_sp': true }, function(err, sanphams, count){
		var session = req.session;
  		res.render('index', {title: 'MickeyShop', sanphambanchay: req.banchay, sanphamdacsac: sanphams, session: session});
 	});
};

router.get('/add-to-cart/:id', function(req, res, next) {
  var pid = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

  sanpham.findById(pid, function(error, sanphamlayduoc) {
    cart.add(sanphamlayduoc, pid);
    req.session.cart = cart;
    console.log(cart);
    res.redirect(req.get('referer'));

  });
});

router.get('/delete-from-cart/:id', function(req, res, next) {
  var pid = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

  
    cart.delete(pid);
    req.session.cart = cart;
    console.log(cart);
    res.redirect(req.get('referer'));
});




module.exports = router;
