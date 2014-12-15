var express		= require('express'),
	app			= express(),
	bodyParser	= require('body-parser'),
	mongoose	= require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

//////////////////////////////Database/////////////////////////
mongoose.connect('mongodb://localhost/seasons-app');

var Clothing = require('./server/clothing/models/clothing.js');
var clothingController = require('./server/clothing/controller/clothings-controller.js');
///////////////////////////////////////////////////////////////


/////////////////////////Routing///////////////////////////////
var router		= express.Router();

// api routes
router.route('/clothing')

	// READ //
	.get(clothingController.getClothing)

	// CREATE //
	.post(clothingController.postClothing);

router.route('/clothing/:id')

	// UPDATE //
	.put(clothingController.updateClothing);

	// DELETE //


// client routes
router.route('/')
	.get(function(req,res){
		res.sendFile('/index.html'); //angular route for SPA
	});

app.use('/v1/api', router);
///////////////////////////////////////////////////////////////


// the port will be whatever we set it to or default to 3000;
var port        = process.env.PORT || 3000;

app.listen(port);

console.log('Server is running on port: ' + port);