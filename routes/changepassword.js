var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET change password page. */
router.get('/', function(req, res, next) {
	if (!req.session.username){
		req.flash('error', 'Please login first!');
		res.redirect('/');
	}
	else{
	var session = req.session;
	var curUsername = session.username;
	User.findOne({username: curUsername}, function(err, user, count){
		res.render('changepassword', {title: 'MickeyShop',session: session, userinfo: user});
		});
	}
});

router.post('/', function(req, res) {
  console.log("BOBOsxasxfvacdfadassdaxzdfxacfadfd: " + req);
  var username = req.session.username;
  var newpassword = req.body.newpassword;
  console.log("Bao da deb day");
  console.log(req.body.username);
  //var query = {'username':req.body.username};
  var query = {'username': username};
  console.log(username);
  console.log(newpassword);
  console.log(query);
  //console.log(userinfo);
  //req.userinfo.password=newpassword;
  //var newuser = new User({hoten: newhoten, email: newemail, sdt: newsdt, diachi: newdiachi  });
  User.findOneAndUpdate(query, {username: username, password: newpassword}, {upsert:true}, function(err, doc){
    if(err){
      console.log(err);
      return err;
    }else{
      console.log(err);
      console.log("sSBHAshiavhisbaSNAJKns            :"+doc);
      console.log("user added");
      console.log("Found user!");
        console.log("REQ.SESSION.ID : "+ req.session.userid);
      console.log("REQ.SESSION.USERNAME: "+ req.session.username);
      res.redirect('/changepassword');
    }
});

  
});


module.exports = router;
