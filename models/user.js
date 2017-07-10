var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	username: {type: String, required: true},
	password: {type: String, required: true},
	hoten: {type: String, required: false},
	sdt: {type: String, required: false},
	email: {type: String, required: false},
	diachi: {type: String, required: false},
	admin: {type: String, required: false}
});
module.exports = mongoose.model('User', schema); 