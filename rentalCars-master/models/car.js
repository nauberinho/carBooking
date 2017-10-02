var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var carSchema = new Schema ({
	name:{
		type:String,
		required:true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Car = module.exports = mongoose.model('Car', carSchema);

module.exports.getCarTypes = function(callback, limit) {
	Car.find(callback).limit(limit);
}