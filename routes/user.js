var express = require('express');
var router = express.Router();

router.route('/')

	// save
	.post(function(req, res) {
		var c = new req.User(req.body);
		c.save(function (err, user) {
			if (err || !user) {
				console.log("Error saving user");
				if (err) {
					res.send(err);
				}
			} else {
				res.send(user);
			}
		});
	})

	// get all
	.get(function(req, res) {
		req.User.find(null, function(err, users) {
		  if (err || !users) {
				console.log("No users found");
			} else {
				res.send(users);
			}
		});
	})

;

router.route('/:_id')
	
	// get one
	.get(function(req, res) {
		req.User.findById(req.params._id, function(err, user) {
			if (err || !user) {
				console.log('No user found');
			} else {
				res.send(user);
			}
		});	
	})

	// update
	.put(function(req, res) {
		var user_update = {name:req.body.name};
		req.Contact.findByIdAndUpdate(req.params._id, contact_update, function (err, numAffected) {
			if (err || !numAffected) {
				console.log("Error updating user");
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
		req.Contact.findOneAndRemove({_id:req.params._id}, function (err, user) {
			if (err || !user) {
				console.log("Error removing user");
			} else {
				res.send(user);
			}
		});
	})
;

module.exports = router;
