var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    email: String,
	password: String
});
var collection = 'user';
var User = mongoose.model('User', userSchema, collection);

module.exports = User;
