var Clothing = require('./clothing/models/clothing.js'),
	clothingController = require('./clothing/controller/clothings-controller.js'),
	Category = require('./category/models/category.js'),
	categoryController = require('./category/controller/categories-controller.js'),
    mongoose = require('mongoose');

module.exports = function(app) {
	// Clothing routes
    app.get('/v1/api/clothing', clothingController.getClothing);

    app.get('/v1/api/clothing/:categoryId', function(request, response) {

    console.log(request.params.categoryId);
    Category.findById(request.params.categoryId, '-_id clothing', function(error, category) {

      // if query fails
      if (error) console.log('could not find category b/c ', error);

      // if query succeeds query Clothing model with category id
      var clothingId = category.clothing[0].type

      Clothing.findById(clothingId, function(error, data) {
        if (error) console.log('could not find clothing b/c ', error);
        // return clothing documents as json
        console.log(data);
        response.status(200).json(data);
      });

    });


       // mongoose.model(Clothing).find({ category: request.params.categoryId }, 
       // function(error, clothing) {
       //  mongoose.model(Clothing).populate(Category, {path: 'Category'}, function (error, clothing){
       //    response.send(clothing);
       //  });
       // }); 

    });

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