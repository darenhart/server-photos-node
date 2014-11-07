var express = require('express');
var router = express.Router();


router.get('/get', function(req, res) {
	req.Contact.find(null, function(err,contacts) {
	  if (err || !contacts) {
			console.log("No contacts found");
		} else {
			res.send(contacts);
		}
	});
});

router.post('/remove', function(req, res) {
	req.Contact.findOneAndRemove({_id:req.body._id}, function (err, contact) {
		if (err || !contact) {
			console.log("Error removing contact");
		} else {
			res.send(contact);
		}
	});
});

router.post('/save', function(req, res) {
	var c = new req.Contact(req.body);
	c.save(function (err, contact) {
		if (err || !contact) {
			console.log("Error saving contact");
			if (err) {
				res.send(err);
			}
		} else {
			res.send(contact);
		}
	});
});

router.post('/update', function(req, res) {
	var contact_update = {name:req.body.name,phone:req.body.phone};
	console.log(contact_update);
	req.Contact.findByIdAndUpdate(req.body._id, contact_update, function (err, numAffected) {
		if (err || !numAffected) {
			console.log("Error updating contact");
			if (err) {
				res.send(err);
			}
		} else {
			res.send(numAffected);
		}
	});
});

module.exports = router;
