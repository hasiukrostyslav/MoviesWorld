const express = require('express');
const cartoonsController = require('../controllers/cartoonsController');

const router = express.Router();

router.route('/').get(cartoonsController.getCartoonsByCategory);

module.exports = router;
