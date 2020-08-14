const mongoose = require('mongoose');

mongoose.Promise = Promise;

mongoose
	.connect('mongodb://localhost/tv', { useNewUrlParser: true })
	.then((conn) => {
		console.log(`connected to mongodb on ${conn.connections[0].name} db`);
	})
	.catch((err) => {
		console.error(err);
	});

module.exports = mongoose;
