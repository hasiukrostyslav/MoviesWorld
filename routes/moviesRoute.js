const express = require('express');
const moviesController = require('../controllers/moviesController');

const router = express.Router();

router.route('/').get(moviesController.getMovieListsByCategory);

router.route('/category/:key').get(moviesController.getMoviesList);

router.route('/movie/:id').get(moviesController.getMovie);

module.exports = router;
