const express = require('express');
const actorsController = require('../controllers/actorsController');

const router = express.Router();

router.route('/').get(actorsController.getAllActors);
router.route('/view/actor/:id').get(actorsController.getActor);

module.exports = router;
