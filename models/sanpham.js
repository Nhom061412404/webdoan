var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	
	ten_sp: {type: String, required: true},
	gia_sp: {type: Number, required: true},
	mota_sp: {type: String, required: true},
	hang_sp: {type: String , required: true},
	loai_sp:  {type: String , required: true},
	hinh_sp: {type: String , required: true},
	sale_sp: {type: Boolean , required: true},
	new_sp: {type: Boolean , required: true}

});
module.exports = mongoose.model('Sanpham', schema); 