const express = require('express');
const cartoonsController = require('../controllers/cartoonsController');
const moviesController = require('../controllers/moviesController');
const showsController = require('../controllers/showsController');

const router = express.Router();

router.route('/').get(cartoonsController.getCartoonListsByCategory);
router.route('/category/:type/:key').get(cartoonsController.getCartoonList);
router.route('/view/movie/:id').get(moviesController.getMovie);
router.route('/view/tv/:id').get(showsController.getShow);
router.route('/view/tv/:id/season/:seasonId').get(showsController.getSeason);
router
  .route('/view/tv/:id/season/:seasonId/episode/:episodeId')
  .get(showsController.getEpisode);

module.exports = router;
