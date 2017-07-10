var express = require('express');
var router = express.Router();
var product = require('../models/product');
var Cart = require('../models/cart');
var Donhang = require('../models/donhang');
var User = require('../models/user');
var nodemailer = require('nodemailer');

/* GET checkout page. */
router.get('/', function(req, res, next) {
	var session = req.session;
  console.log(session.username);
  console.log(session);
  if(session.username != undefined){

    User.findOne({username: session.username}, function(err, user, count){
      if(err){
        console.log(err);
      }
      console.log(user);
      return res.render('checkout', {title: 'MickeyShop',hoten: user.hoten, sodienthoai: user.sdt, email: user.email, diachi: user.diachi ,session: session});
    });
  }else{
  console.log("KNONG CO USER");
	return res.render('checkout', {title: 'MickeyShop',hoten: "", sodienthoai: "", email: "", diachi: "" ,session: session});
}
});


router.post('/', function(req, res) {
  var newhoten = req.body.hoten;
  var newemail = req.body.email;
  var newsodienthoai = req.body.sodienthoai;
  var newdiachi = req.body.diachi;
  var session = req.session;


  var cart = new Cart(session.cart);

      var newdonhang = new Donhang({hoten: newhoten, email: newemail, sodienthoai: newsodienthoai, diachi: newdiachi, tongtien: cart.totalPrice, giohang: cart.toString(), trangthai: "dangxuly"});
  
      newdonhang.save(function(err){
        console.log(newdonhang);
        if(err){
          console.log(err);
          return err;
        }else{
          console.log("don hang added");
          delete session.cart;

          let transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                  user: 'mickeysop@gmail.com',
                  pass: 'minhquan'
              }
          });

          // setup email data with unicode symbols
          let mailOptions = {
              from: '"MickeyShop" <mickeysop@gmail.com>', // sender address
              to: newemail, // list of receivers
              subject: '[Thông báo] Đơn hàng đã được đặt', // Subject line
              text: 'Đơn hàng của ban đã được đặt thành công.' + cart.toString() + '. Tổng giá trị là: ' + cart.totalPrice + '.000VNĐ.Cám ơn bạn đã lựa chọn shop <3.', // plain text body
              html: 'Đơn hàng của ban đã được đặt thành công.<br/>' + cart.toString() + '. Tổng giá trị là: ' + cart.totalPrice + '.000VNĐ.<br/>Cám ơn bạn đã lựa chọn shop <3.' // html body
          };

          // send mail with defined transport object
          transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                  return console.log(error);
              }
              console.log('Message %s sent: %s', info.messageId, info.response);
          });


          res.redirect('/');
        }
      });




});

module.exports = router;
