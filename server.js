var express		= require('express'),
	app			= express(),
	bodyParser	= require('body-parser'),
	mongoose	= require('mongoose'),
	// path = require('path'),
	database = require('./config/database');

mongoose.connect(database.url);

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./server/routes.js')(app);


// the port will be whatever we set it to or default to 3000;
var port        = process.env.PORT || 3000;

app.listen(port);

console.log('Server is running on port: ' + port);