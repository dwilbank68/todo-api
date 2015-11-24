var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var todos = [{
	id: 1,
	description: 'Meet mom for lunch',
	completed: false
},{
	id: 2,
	description: 'Go to market',
	completed: false
},{
	id: 3,
	description: 'Eat bug',
	completed: true
}];

app.get('/', function(req,res) {
	res.send('Todo API Root');
});

app.get('/todos', function(req,res){
	res.json(todos);
});

app.get('/todos/:id', function(req,res){
	var id = req.params.id;
	var matched;
	todos.forEach(function(el){
		console.log(el.id);
		if (el.id === parseInt(id,10)) {
			console.log('got match');
			matched = el;
			res.json(matched);
		}
	});

	console.log('matched is ', matched);
	//if(matched) {
	//	return res.json(matched)
	//} else {
		res.status(404).send();
	//}

});

app.listen(PORT, function(){
	console.log('Express listening on port ', PORT);
});
