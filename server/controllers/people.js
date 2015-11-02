var mongoose = require('mongoose');
var Person = mongoose.model('Person');
module.exports = {
	get_one: function(req, res){
		Person.findOne({name : req.params.name}, function(err, person){
			res.json(person);
		})
	},
	get_all: function(req, res){
		Person.find({}, function(err, people){
			res.json(people);
		});
	},
	new_person: function(req, res){
		var person = new Person({name : req.params.name});
		person.save(function(err){
			res.redirect('/');
		})
	},
	remove_person: function(req, res){
		Person.remove({name : req.params.name}, function(err){
			res.redirect('/');
		})
	},
}