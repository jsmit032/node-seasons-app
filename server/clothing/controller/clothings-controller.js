var Clothing = require('../models/clothing.js');

function getClothing (request, response) {

	Clothing.find(function(error, data){
		if (error) console.log(error);
		response.status(200).json(data);
	})
}

function postClothing (request, response) {

	var clothing = new Clothing();

	clothing.name = request.body.name;

	clothing.save(function(error){
		if (error) console.log(error);
		response.status(201).json({ message: 'clothing created successfully' });
	});

}

module.exports = {

	getClothing: getClothing,
	postClothing: postClothing

}