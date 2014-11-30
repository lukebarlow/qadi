var app = require('./'),
	port = 8089;

var server = app.listen(port);
app.init(server);

console.log('Qadi running at localhost:' + port);