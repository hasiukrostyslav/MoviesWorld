const express = require('express');
const collectionsController = require('../controllers/collectionsController');

const router = express.Router();

router.route('/').get(collectionsController.getMoviesCollections);

module.exports = router;
