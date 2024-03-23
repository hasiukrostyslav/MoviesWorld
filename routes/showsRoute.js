const express = require('express');
const showsController = require('../controllers/showsController');

const router = express.Router();

router.route('/').get(showsController.getShowsByCategory);

module.exports = router;
