var express = require('express');
var router = express.Router();
var sanpham = require('../models/sanphams');
var multer = require('multer');
var storage = multer.diskStorage({
	destination: function(req, file, cb){
		cb(null,'./public/upload')
	},
	filename: function(req, file, cb){
		cb(null,file.originalname)
	}
})

var upload = multer({storage:storage});

router.post('/', upload.single("file"), function(req, res){
	console.log('HINH LAY DUOC KO?'+req.file.filename)
		var path = "../upload/"+req.file.filename;
		var sp_them = new sanpham({
			"ma_sp": req.body.ma,
			"ten_sp": req.body.ten,
			"loai_sp": req.body.loai,
			"hang_sp": req.body.hang,
			"gia_sp": req.body.gia,
			"soluong_sp": req.body.slg,
			"hinh_sp": path,
			"mota_sp": req.body.mota,
		});
			console.log('LAY DUOC HINH CHUA?'+path);
		sp_them.save(function(err){
			if(err){
	          return err;
        	}
        	else{
          console.log("san pham added");
          res.redirect('/sanpham');
        	}
		});
});


module.exports = router;