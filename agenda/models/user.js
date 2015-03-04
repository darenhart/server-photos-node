var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var contactSchema = new Schema({
    name: String,
    email: String,
	password: String
});
var collection = 'user';
var User = mongoose.model('User', contactSchema, collection);

module.exports = User;
