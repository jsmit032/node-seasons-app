var Clothing = require('../models/clothing.js'),
	mongoose = require('mongoose');

function getClothing (request, response) {

	Clothing.find(function(error, clothing){
		if (error) console.log(error);
		response.status(200).json(clothing);
	});
}

// function showClothing (request, response) {

// 	Clothing.findById({category: request.params.clothingId}, 
// 		function(error, clothing){
// 			Clothing.populate(clothing, {path: 'category'}, function (error, clothing) {
// 				response.send(clothing);
// 			});
// 	});

// }

function postClothing (request, response) {

	var clothing = new Clothing();

	clothing.name = request.body.name;

	clothing.save(function(error){
		if (error) console.log(error);
		response.status(201).json({ message: 'clothing created successfully' });
	});

}

// GOT 204 ERROR 'NO CONTENT' after update
function updateClothing (request, response) {

	Clothing.findById(request.params.id,
		function(error, clothing){
			if (error) console.log(error);
			clothing.name = request.body.name;

			clothing.save(function(error){
				response.status(202).json({ message: 'clothing successfully updated!' });
			})
		}
	);

}

function deleteClothing (request, response) {

	Clothing.remove({ _id: request.params.id }, 
		function(error, data){
			if (error) console.log(error);
			response.status(202).json({ message: 'clothing successfully deleted!' });
		});

};

module.exports = {

	getClothing: getClothing,
	postClothing: postClothing,
	updateClothing: updateClothing,
	deleteClothing: deleteClothing

}