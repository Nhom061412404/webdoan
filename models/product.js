var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	ten: {type: String, required: true},
	gia: {type: Number, required: true},
	mota: {type: String, required: true},
	hang: {type: String , required: true},
	hinh: {type: String , required: true}

});
module.exports = mongoose.model('Product', schema); 