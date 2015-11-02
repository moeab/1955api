var mongoose = require('mongoose');

var peopleSchema = new mongoose.Schema({
	name : String
})

var person = mongoose.model('Person', peopleSchema);