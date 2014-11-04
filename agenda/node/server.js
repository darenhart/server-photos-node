var http = require("http");
var url = require("url");

function start(route) {
	function onRequest(request, response) {
		var path = url.parse(request.url).pathname;
		if (path == '/favicon.ico') {
			console.log("Ignoring /favicon.ico request.");
			return;
		}

		route(path);

		response.writeHead(200, {"Content-Type":"text/plain"});
		response.write("Hello friend");
		response.end();
		console.log("Request done.");
	}

	var server = http.createServer(onRequest);

	// set port
	server.listen(8888);
	console.log("Server started.");
}

exports.start = start;

