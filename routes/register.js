var express = require('express');
var router = express.Router();
var product = require('../models/product');
var User = require('../models/user');
var nodemailer = require('nodemailer');

/* GET register page. */
router.get('/', function(req, res, next) {
	var session = req.session;
	res.render('register', {title: 'MickeyShop',session: session});
});

router.post('/', function(req, res) {
  var newusername = req.body.reg_username;
  var newpassword = req.body.reg_password;
  var newhoten = req.body.reg_fullname;
  var newemail = req.body.reg_emailaddress;
  var newsdt = req.body.reg_phonenumber;
  var newxacnhan = req.body.reg_confirm_password;
  var newdiachi = req.body.reg_address;

  User.findOne({username: newusername}, function(err, user, count){
    if(user){
      console.log("da có tai khoan roi mà asndklasjodbsjabdasbkhdbahxbkjfndmsci sncldsixub k fibfsx :"+user);
      console.log(err);
      res.redirect('/register');
      return err;
    }
    else {
      var newuser = new User({username: newusername, password: newpassword, hoten: newhoten, email: newemail, sdt: newsdt, diachi: newdiachi  });
  
      newuser.save(function(err){
        console.log(newuser);
        var session = req.session;
        if(err){
          console.log(err);
          return err;
        }else{
          console.log("user added");
          req.session.username = newusername;
          req.session.hoten = newhoten;

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
              subject: '[Thông báo] Đăng ký tài khoản thành công', // Subject line
              text: 'Tài khoản của ban đã được đăng ký thành công. Với tên đăng nhập: ' + newusername + '.Cám ơn bạn đã lựa chọn shop <3.', // plain text body
              html: 'Tài khoản của ban đã được đăng ký thành công.<br/> Với tên đăng nhập: ' + newusername + '.<br/>Cám ơn bạn đã lựa chọn shop <3.' // html body
          };

          // send mail with defined transport object
          transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                  return console.log(error);
              }
              console.log('Message %s sent: %s', info.messageId, info.response);
          });

          User.findOne({username: newusername}, function(err, user, count){
            console.log(user);
            console.log("User.username :"+user.username);
            console.log("User.id: "+user._id);
            req.session.userid = user._id; 

          });
          res.redirect('/');
        }
      });
    }
  });

  // var newuser = new User({username: newusername, password: newpassword, hoten: newhoten, email: newemail, sdt: newsdt, diachi: newdiachi  });
  
  // newuser.save(function(err){
  // 	console.log(newuser);
  //   var session = req.session;
  // 	if(err){
  // 		console.log(err);
  // 		return err;
  // 	}else{
  // 		console.log("user added");
  // 		req.session.username = newusername;
  //     req.session.hoten = newhoten;
  // 		User.findOne({username: newusername}, function(err, user, count){
  // 			console.log(user);
  //       console.log("User.username :"+user.username);
  //       console.log("User.id: "+user._id);
  // 			req.session.userid = user._id; 

  // 		});
  //     console.log("REQ.SESSION.ID : "+ req.session.userid);
  //     console.log("REQ.SESSION.USERNAME: "+ req.session.username);
  // 		res.redirect('/');
  // 	}
  // });

});



module.exports = router;
