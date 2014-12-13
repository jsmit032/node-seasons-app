var express		= require('express'),
	app			= express(),
	bodyParser	= require('body-parser'),
	mongoose	= require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//////////////////////////////Database/////////////////////////
mongoose.connect('mongodb://localhost/seasons-app');

///////////////////////////////////////////////////////////////


/////////////////////////Routing///////////////////////////////

var router		= express.Router();

///////////////////////////////////////////////////////////////


// the port will be whatever we set it to or default to 3000;
var port        = process.env.PORT || 3000;

app.listen(port);

console.log('Server is running on port: ' + port);