var express = require('express');
var router = express.Router();

/* GET saved_resource(1) page. */
router.get('/', function(req, res, next) {
	if(req.session.admin){
		res.render('saved_resource1', { title: 'Express-Không biết ghi gì' });
	}
	else{
		res.redirect('/admin');
	}
  
});

module.exports = router;
