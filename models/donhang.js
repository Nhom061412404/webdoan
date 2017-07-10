var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	hoten: {type: String, required: true},
	email: {type: String, required: true},
	sodienthoai: {type: String, required: true},
	diachi: {type: String, required: true},
	giohang: {type: String, required: true},
	tongtien: {type: Number, required: true},
	trangthai: {type: String, required: true},
});
module.exports = mongoose.model('Donhang', schema); 