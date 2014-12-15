var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ClothingSchema = new Schema({

	name: String

});

module.exports = mongoose.model('Clothing', ClothingSchema);