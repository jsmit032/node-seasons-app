var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CategorySchema = new Schema({

	name: String,
	clothing: {
		type: Schema.ObjectId,
		ref: 'Clothing'
	}

});

module.exports = mongoose.model('Category', CategorySchema);