function execute() {
	console.log("AGENDA");
	
	var uri = "agenda";
	var collections = ["contact"];
	var db = require("mongojs").connect(uri,collections);
	db.contact.find(null, function(err, contacts) {
		if (err || !contacts) {
			console.log("No contacts found");
		} else {
			console.log(contacts);
		}
	});
}

exports.execute = execute;