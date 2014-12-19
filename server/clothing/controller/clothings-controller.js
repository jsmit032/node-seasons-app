var Clothing = require('../../clothing/models/clothing.js'),
	Category = require('../../category/models/category.js'),
	url = require('url'),
	mongoose = require('mongoose');

function getClothing (request, response) {

	queryData = url.parse(request.url,true).query;
	console.log(queryData);
	
 	categoryObj = null;
 	if(queryData.category)
	var query = Category.find({name: queryData.category });
	
	query.exec(function(error, cats){
		if (error) console.log(error);
		console.log(cats);
		Clothing.populate(cats, {path: 'clothings' }, function (err, cats2) {
			if(err) console.log("bad stuff: " + err);
			cats2.forEach(function(cat) {
				console.log(cat.clothings);
				cat.clothings.forEach(function(clothes) {
					console.log(clothes.clothing_type);
				})
				response.status(200).json(cat.clothings);

			});
			// console.log(cats2.clothings);
			// response.status(200).json(cats2);
		});
		//console.log("clothing: " + clothing);
		
	
	});

     
}

function showClothing (request, response) {

	queryData = url.parse(request.url,true).query;
	console.log(queryData);

	Clothing.findById({category: request.params.clothingId}, 
		function(error, clothing){
			Clothing.populate(clothing, {path: 'category'}, function (error, clothing) {
				response.send(clothing);
			});
	});

}

function postClothing (request, response) {
	console.log(request.body)
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