var mongoose = require('mongoose'),
  Category = require('../../category/models/category.js'),
	Schema = mongoose.Schema;

var ClothingSchema = new Schema({

	clothing_type: String,
	category: {
		type: Schema.ObjectId,
		ref: 'Category'
	}
});

module.exports = mongoose.model('Clothing', ClothingSchema);