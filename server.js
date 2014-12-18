var express   			  = require('express'),
  	app     			    = express(),
  	port 				      = process.env.PORT || 3000,
  	bodyParser  		  = require('body-parser'),
  	mongoose  			  = require('mongoose'),
  	mongodbUri 			  = require('mongodb-uri'),
    fs                = require('node-fs'),
  	developmentdb 		= require('./config/developmentdb'),
  	WunderNodeClient 	= require('wundernode'),
  	URL 				      = require('url');

// development only
if ('development' == app.get('env')) {
  mongoose.connect(developmentdb.url);
} else if ('production' == app.get('env')) {
  var uri = 'mongodb://heroku_app32583861:f02opcjc007nor4rg1c1otts07@ds027751.mongolab.com:27751/heroku_app32583861';

  var mongooseConnectString = mongodbUri.formatMongoose(uri);
  mongoose.connect(mongooseConnectString);
}

// Test for connection success
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', function callback () {
    console.log('Successfully connected to MongoDB');
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');



// wunderground api
var apikey = "2f0b44146ceab5a4";
var zip = 10021;
var debug = false;
var wunder = new WunderNodeClient(apikey, debug,  10, 'minute');

app.get('/conditions/forecast', function(req, res){
   var query = zip;
   console.log('query: ' +  query);
   console.log('URL: ' + URL);
    wunder.conditionsforecast(query, function(err, obj) {
      if (err){
        console.log('errors: ' + err);
        res.end("Error processing query string:" + queryData.query);
      }
      res.end(obj);
    });
});

require('./server/routes.js')(app);

app.listen(port);

console.log('Server is running on port: ' + port);