var express = require('express');
var router = express.Router();

/* GET cauhinh page. */
router.get('/', function(req, res, next) {
  if(req.session.admin){
  	res.render('cauhinh', { title: 'Cấu hình' });
  }
  else{
  	res.redirect('/admin');
  }
  
});

module.exports = router;
