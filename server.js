var express		= require('express'),
	app			= express(),
	bodyParser	= require('body-parser'),
	mongoose	= require('mongoose'),
	mongodbUri = require('mongodb-uri'),
	// path = require('path'),
	database = require('./config/database');

var uri = 'mongodb://heroku_app32583861:f02opcjc007nor4rg1c1otts07@ds027751.mongolab.com:27751/heroku_app32583861';

var mongooseConnectString = mongodbUri.formatMongoose(uri);
mongoose.connect(mongooseConnectString);
// mongoose.connect(database.url);

// Test for connection success
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', function callback () {
    console.log('Successfully connected to MongoDB');
})

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./server/routes.js')(app);


// the port will be whatever we set it to or default to 3000;
var port        = process.env.PORT || 3000;

app.listen(port);

console.log('Server is running on port: ' + port);