const shows = require('./shows.json');
const Show = require('./models/Show');

Show.deleteMany({})
	.then(() => {
		console.log('inserted show data');
		return Show.insertMany(shows);
	})
	.then(() => {
		process.exit();
	});
