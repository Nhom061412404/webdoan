var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	username: {type: String, required: true},
	password: {type: String, required: true},
	hoten: {type: String, required: true},
	sdt: {type: String, required: true},
	email: {type: String, required: true},
	diachi: {type: String, required: true}
});

module.exports = mongoose.model('users', schema); 