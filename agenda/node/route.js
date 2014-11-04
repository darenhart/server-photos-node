function route(path) {
	// set index
	if (path == '/') {
		path = '/agenda';
	}
	console.log("Routing the request for " + path);
	var action = require("."+path);
	action.execute();
}

exports.route = route;