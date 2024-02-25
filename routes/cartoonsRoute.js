const express = require('express');
const cartoonsController = require('../controllers/cartoonsController');

const router = express.Router();

router.route('/').get(cartoonsController.getAllCartoons);

module.exports = router;
