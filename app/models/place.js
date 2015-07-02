var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

var PlaceSchema = new Schema({
	name : String, 
	reason : String,
	requester : {
		name : String,
		facebookId : Number
	}
})

var Place = mongoose.model('Place', PlaceSchema);