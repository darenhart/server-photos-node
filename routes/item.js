var express = require('express');
var router = express.Router();

router.route('/')

	// save
	.post(function(req, res) {
		var i = new req.Item(req.body);
    i.user = "54f7ba193d07558a148288db";
    console.log(i);
		i.save(function (err, item) {
			if (err || !item) {
				console.log("Error saving item");
				if (err) {
					res.send(err);
				}
			} else {
				res.send(item);
			}
		});
	})

	// get all
	.get(function(req, res) {
    req.body.user = "54f7ba193d07558a148288db";
		req.Item.find(req.body, function(err, items) {
		  if (err || !items) {
				console.log("No item found");
			} else {
				res.send(items);
			}
		});
	})

;

router.route('/:_id')
	
	// get one
	.get(function(req, res) {
		req.Item.findById(req.params._id, function(err, item) {
			if (err || !item) {
				console.log('No item found');
			} else {
				res.send(item);
			}
		});	
	})

	// update
	.put(function(req, res) {
		var item_update = {name:req.body.name};
		req.Item.findByIdAndUpdate(req.params._id, item_update, function (err, numAffected) {
			if (err || !numAffected) {
				console.log("Error updating item");
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
		req.Item.findOneAndRemove({_id:req.params._id}, function (err, item) {
			if (err || !item) {
				console.log("Error removing item");
			} else {
				res.send(item);
			}
		});
	})
;

module.exports = router;
