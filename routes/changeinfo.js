var express = require('express');
var router = express.Router();
var User = require('../models/user');


router.post('/', function(req, res) {
  console.log("BOBO: " + req);
  var newusername = req.session.username;
  var newhoten = req.body.hoten;
  var newsdt = req.body.sdt;
  var newemail = req.body.email;
  var newdiachi = req.body.diachi;
  console.log("Bao da deb day");
  //var query = {'username':req.body.username};
  var query = {'username': newusername};
  //var newuser = new User({hoten: newhoten, email: newemail, sdt: newsdt, diachi: newdiachi  });
  User.findOneAndUpdate(query, {username: newusername, hoten: newhoten, sdt: newsdt, diachi: newdiachi, email: newemail }, {upsert:true}, function(err, doc){
    if(err){
      console.log(err);
      return err;
    }else{
      
      res.redirect('/accountinformation');
    }
});

  
});


module.exports = router;
