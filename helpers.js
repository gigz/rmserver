var sprintf = require('sprintf-js').sprintf
var url = require('url');
var exec = require('child_process').exec;

// GETS THE URL PARAMS
function getURLParams (req) {
	var urlParts = url.parse(req.url, true);
	return urlParts.query;
}

// RETURNS A JSON HTTP RESPONSE
function httpResponse (res, response) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
}

function execute (cmd) {
    console.log(cmd);
    exec(cmd, function(err, stdout, stderr) {
        if (err) {
	    console.log('Error running command');
        } else {
	    console.log('Command executed successfully');
	}
        console.log(sprintf("stdout: %1$s", stdout));
        console.log(sprintf("stderr: %1$s", stderr));
    });
}

exports.irCommand = function (req, res) {
    var params = getURLParams(req);
    var cmd = sprintf("/home/pi/python-broadlink/cli/broadlink_cli --type 0x2712 --host %1$s --mac %2$s --%3$s %5$s/home/pi/python-broadlink/cli/%4$s",
        params.ip,
	params.mac,
	params.action,
	params.command,
	(params.action == 'send') ? "@" : ""
    ); 
    execute(cmd);

    httpResponse(res, 'Request Received');
};

