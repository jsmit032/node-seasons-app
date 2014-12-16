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
        response.sendfile('./client/views/index.html');
        // response.sendFile('index.html', { root: path.join(__dirname, '../client/views/') });
    });
};

  // api routes
//   router.route('/clothing')

//     // READ //
//     .get(clothingController.getClothing)

//     // CREATE //
//     .post(clothingController.postClothing);

//   router.route('/clothing/:id')

//     // UPDATE //
//     .put(clothingController.updateClothing)

//     // DELETE //
//     .delete(clothingController.deleteClothing);

//   // client routes
//   router.route('*')
//     .get(function(req,res){
//       res.sendFile(__dirname + './client/views/index.html'); //angular route for SPA
//     });

//   app.use('/v1/api', router);
//   app.use('/', router);
// };