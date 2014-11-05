var express = require('express');
var router = express.Router();

// db
var uri = "agenda";
var collections = ["contact"];
var db = require("mongojs").connect(uri,collections);

router.get('/get', function(req, res) {
	db.contact.find(null, function(err, contacts) {
		if (err || !contacts) {
			console.log("No contacts found");
		} else {
			res.send(contacts);
		}
	});
});

router.post('/save', function(req, res) {
	
});


module.exports = router;
