const express = require('express');
const moviesController = require('../controllers/moviesController');

const router = express.Router();

router.route('/').get(moviesController.getMoviesByCategory);

module.exports = router;
