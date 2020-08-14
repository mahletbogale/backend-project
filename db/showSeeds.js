const shows = require("./shows.json");
const Show = require("./models/Show");


Show.deleteMany({})
.then(() => {
    Show.insertMany(shows);
})
    .then(() => {
        process.exit();
    });