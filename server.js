var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index');
});

app.listen(8080);
console.log('visit me at http://localhost:8080 son');