var express = require('express');
var router = express.Router();

// db
var uri = "agenda";
var collections = ["contact"];
var db = require("mongojs").connect(uri,collections);

/* GET users listing. */
router.get('/:action', function(req, res) {

  if (req.params.action == 'save') {
  	db.contact.find(null, function(err, contacts) {
			if (err || !contacts) {
				console.log("No contacts found");
			} else {
				console.log(contacts);
			}
		});
  }
  res.send(req.params,200);
});

module.exports = router;
