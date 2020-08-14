const express = require('express');
const showsController = require('./controllers/shows');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/shows', showsController);

app.listen(8080, () => console.log('tv app is running 8080!'));
