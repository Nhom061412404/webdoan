var express = require('express');
var router = express.Router();
var product = require('../models/product');
var Cart = require('../models/cart');


/* GET home page. */
router.get('/', function(req, res, next) {
  var session = req.session;

  if (! session.cart) {
    return res.render('cart', { title: 'MickeyShop', sanphams: [], session: session, tongtien: "Rỗng"});
  }
  var cart = new Cart(session.cart);
  res.render('cart', { title: 'MickeyShop', sanphams: cart.toArray(), tongtien: cart.totalPrice, session: session,  });
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
