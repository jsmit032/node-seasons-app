var express   			= require('express'),
  	app     			= express(),
  	port 				= process.env.PORT || 3000,
  	bodyParser  		= require('body-parser'),
  	mongoose  			= require('mongoose'),
  	mongodbUri 			= require('mongodb-uri'),
  	database 			= require('./config/database'),
  	WunderNodeClient 	= require('wundernode'),
  	URL 				= require('url');

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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');



/////////// wunderground api ///////////////////////////////

var apikey = "2f0b44146ceab5a4";
var debug = false;
var wunder = new WunderNodeClient(apikey, debug,  10, 'minute');


app.get('/receivezip', function(req, res){
    // take user input
   var query = req._parsedUrl.query;
   console.log();
   console.log('query: ' +  query);
   console.log('URL: ' + URL);

  // send through wunderground api
  wunder.conditionsforecast(query, function(err, obj) {
    if (err){
      console.log('errors: ' + err);
      res.end("Error processing query string:" + queryData.query);
    }
    // callback : parse wunderground api into the things that you want
    // city, current temp, temp low, day condition, night condition, condition text
    var parsedData = JSON.parse(obj);
    var city = parsedData.current_observation.display_location.city;
    var temp = parsedData.current_observation.temp_f;
    var nighttemp = parsedData.forecast.simpleforecast.forecastday[0].low.fahrenheit;
    var condition = parsedData.current_observation.weather;
    var nightcondition = parsedData.forecast.simpleforecast.forecastday[0].conditions;
    var forecasttxt = parsedData.forecast.txt_forecast.forecastday[0].fcttext;

    var weatherReport = JSON.stringify({
      city:city,
      temp:temp,
      nighttemp:nighttemp,
      condition:condition,
      nightcondition:nightcondition,
      forecasttxt:forecasttxt
    });

    res.end(weatherReport);
  });
});

//////////////////////////////////////////////////////////

require('./server/routes.js')(app);

app.listen(port);

console.log('Server is running on port: ' + port);