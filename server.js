var express   = require('express'),
  app     = express(),
  port = process.env.PORT || 3000,
  bodyParser  = require('body-parser'),
  mongoose  = require('mongoose'),
  database = require('./config/database'),
  WunderNodeClient = require('wundernode'),
  URL = require('url');

mongoose.connect(database.url);

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