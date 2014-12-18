var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CategorySchema = new Schema({

	name: String,
	clothing: {
		type: Schema.ObjectId,
		ref: 'clothings'
	}

});

module.exports = mongoose.model('Category', CategorySchema);