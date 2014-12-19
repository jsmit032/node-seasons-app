var mongoose = require('mongoose'),
	Clothing = require('../../clothing/models/clothing.js'),
	Schema = mongoose.Schema;

var CategorySchema = new Schema({

	name: String,
	clothing: {
		type: Schema.ObjectId,
		ref: 'Clothing'
	}

});

module.exports = mongoose.model('Category', CategorySchema);