var express = require('express');
var router = express.Router();

router.route('/')

	// save
	.post(function(req, res) {
		var photo = {img:req.body.img.replace(/^data:image\/png;base64,/,"")};
		var p = new req.Photo(photo);
		p.save(function (err, new_photo) {
			if (err || !new_photo) {
				console.log("Error saving photo");
				if (err) {
					res.send(err);
				}
			} else {
				res.send(new_photo);
			}
		});
	})

	// get all
	.get(function(req, res) {
		req.Photo.find(null, function(err,photos) {
		  if (err || !photos) {
				console.log("No photo found");
			} else {
				res.send(photos);
			}
		});
	})

;

router.route('/:_id')

	// get one
	.get(function(req, res) {
		req.Photo.findById(req.params._id, function(err, photo) {
			if (err || !photo) {
				console.log('No photo found');
			} else {
				res.send(photo);
			}
		});	
	})
	
	// update
	.put(function(req, res) {
		req.Photo.findByIdAndUpdate(req.params._id, req.body, function (err, numAffected) {
			if (err || !numAffected) {
				console.log("Error updating photo");
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
		req.Photo.findOneAndRemove({_id:req.params._id}, function (err, photo) {
			if (err || !photo) {
				console.log("Error removing photo");
			} else {
				res.send(photo);
			}
		});
	})
;

module.exports = router;



