var mongoose = require('mongoose');
var person = require('./../controllers/people.js');
module.exports = function(app){
	app.get('/', function(req, res){
		person.get_all(req, res);
	}),
	app.get('/new/:name/', function(req, res){
		person.new_person(req, res);
	})
	app.get('/remove/:name/', function(req, res){
		person.remove_person(req, res)
	})
	app.get('/:name', function(req, res){
		person.get_one(req, res);
	})
}