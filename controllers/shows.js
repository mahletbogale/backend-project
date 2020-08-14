const express = require('express');
const Show = require('../db/models/Show');

const router = express.Router();

router.get('/', (req, res) => {
	Show.find({}).then((show) => res.json(show));
});

module.exports = router;
