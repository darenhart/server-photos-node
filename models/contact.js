var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var contactSchema = new Schema({
    name: String,
    phone: Number
});
var collection = 'contact';
var Contact = mongoose.model('Contact', contactSchema, collection);

module.exports = Contact;
