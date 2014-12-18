var Clothing = require('./clothing/models/clothing.js'),
	clothingController = require('./clothing/controller/clothings-controller.js'),
	Category = require('./category/models/category.js'),
	categoryController = require('./category/controller/categories-controller.js');

module.exports = function(app) {
	// Clothing routes
    app.get('/v1/api/clothing', clothingController.getClothing);

    app.post('/v1/api/clothing', clothingController.postClothing);

    app.put('/v1/api/clothing/:id', clothingController.updateClothing);

    app.delete('/v1/api/clothing/:id', clothingController.deleteClothing);

    // Category routes
    app.get('/v1/api/category', categoryController.getCategory);

    app.post('/v1/api/category', categoryController.postCategory);

    app.put('/v1/api/category/:id', categoryController.updateCategory);

    app.delete('/v1/api/category/:id', categoryController.deleteCategory);
    
    app.get('*', function(request, response) {
        response.render('index');
    });
};