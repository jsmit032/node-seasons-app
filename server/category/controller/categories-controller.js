var Category = require('../models/category.js');

function getCategory (request, response) {

	Category.find(function(error, data){
		if (error) console.log(error);
		response.status(200).json(data);
	})

}

function postCategory (request, response) {

	var category = new Category();

	category.name = request.body.name;

	category.save(function(error){
		if (error) console.log(error);
		response.status(201).json({ message: 'category was created successfully!' });
	});

}

function updateCategory (request, response) {

	Category.findById(request.params.id, 
		function(error, category) {
			if (error) console.log(error);
			category.name = request.body.name;

			category.save(function(error){
				response.status(202).json({ message: 'category successfully updated!' });
			})
		}
	);

}

function deleteCategory (request, response) {

	Category.remove({ _id: request.params.id }, 
		function(error, data){
			if (error) console.log(error);
			response.status(202).json({ message: 'category successfully deleted!' });
	});

};

module.exports = {

	getCategory: getCategory,
	postCategory: postCategory,
	updateCategory: updateCategory,
	deleteCategory: deleteCategory

}