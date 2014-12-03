var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var photoSchema = new Schema({
    img: Buffer 
});

var collection = 'photo';

var Photo = mongoose.model('Photo', photoSchema, collection);

module.exports = Photo;
