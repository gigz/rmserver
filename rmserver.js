var http = require('http');
var router = require('./router');
var helpers = require('./helpers');

router.register('/ircommand', function(req, res) {
	console.log('IR Command request received');	
        helpers.irCommand(req, res);
});

var server = http.createServer(function (req, res) {
	handler = router.route(req);
	handler.process(req, res);
});

server.listen(8001);
console.log('Server running');
