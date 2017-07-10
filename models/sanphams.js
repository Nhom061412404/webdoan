var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	ma_sp: {type: String, required: true},
	ten_sp: {type: String, required: true},
	gia_sp: {type: Number, required: true},
	mota_sp: {type: String, required: true},
	soluong_sp: {type: Number, required: true},
	hang_sp: {type: String, required: true},
	hinh_sp: {type: String, required: true},
	loai_sp: {type: String, required: true}
});

module.exports = mongoose.model('sanphams', schema);
