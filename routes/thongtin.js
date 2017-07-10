var express = require('express');
var router = express.Router();

/* GET thongtin page. */
router.get('/', function(req, res, next) {
	if(req.session.admin){
		 res.render('thongtin', { title: 'Thông tin' });
	}
	else{
		res.redirect('/admin');
	}
 
});

module.exports = router;
