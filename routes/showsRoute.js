const express = require('express');
const showsController = require('../controllers/showsController');

const router = express.Router();

router.route('/').get(showsController.getShowListsByCategory);
router.route('/category/:key').get(showsController.getShowList);
router.route('/view/tv/:id').get(showsController.getShow);
router.route('/view/tv/:id/season/:seasonId').get(showsController.getSeason);
router
  .route('/view/tv/:id/season/:seasonId/episode/:episodeId')
  .get(showsController.getEpisode);

module.exports = router;
