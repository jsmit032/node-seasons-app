var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ClothingSchema = new Schema({

	name: String,
	category: {
		type: Schema.ObjectId,
		ref: 'categories'
	}
});

module.exports = mongoose.model('Clothing', ClothingSchema);