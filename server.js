var app = require('express')(); 
var http = require('http').Server(app);
var fs = require('fs');

// Add headers
app.use(function (req, res, next) {

	res.setHeader('Content-Type', 'application/json');

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.post('/abcjson', function(req, res) {

    res.send(fs.readFileSync('abc.json', 'utf8'));
}); 

http.listen(3000, function(){ 
	console.log('listening on *:3000'); 
});