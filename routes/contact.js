var express = require('express');
var router = express.Router();

router.route('/')

	// save
	.post(function(req, res) {
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
	})

	// get all
	.get(function(req, res) {
		req.Contact.find(null, function(err,contacts) {
		  if (err || !contacts) {
				console.log("No contacts found");
			} else {
				res.send(contacts);
			}
		});
	})

;

router.route('/:_id')
	
	// get one
	.get(function(req, res) {
		req.Contact.findById(req.params._id, function(err, contact) {
			if (err || !contact) {
				console.log('No contact found');
			} else {
				res.send(contact);
			}
		});	
	})

	// update
	.put(function(req, res) {
		var contact_update = {name:req.body.name,phone:req.body.phone};
		req.Contact.findByIdAndUpdate(req.params._id, contact_update, function (err, numAffected) {
			if (err || !numAffected) {
				console.log("Error updating contact");
				if (err) {
					res.send(err);
				}
			} else {
				res.send(numAffected);
			}
		});
	})

	// delete
	.delete(function(req, res) {
		req.Contact.findOneAndRemove({_id:req.params._id}, function (err, contact) {
			if (err || !contact) {
				console.log("Error removing contact");
			} else {
				res.send(contact);
			}
		});
	})
;

module.exports = router;
