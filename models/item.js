var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var itemSchema = new Schema({
    name: String,
    description: String,
    category: String,
    user: Object
});
var collection = 'item';
var Item = mongoose.model('Item', itemSchema, collection);

module.exports = Item;
