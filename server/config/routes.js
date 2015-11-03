var mongoose = require('mongoose');
var person = require('./../controllers/people.js');
module.exports = function(app){
	app.get('/', person.get_all),
	app.get('/new/:name/', person.new_person),
	app.get('/remove/:name/', person.remove_person),
	app.get('/:name', person.get_one)
}