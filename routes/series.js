let express = require('express');
let router = express.Router();
let controllers = require('../controllers');

router.get('/', controllers.seriesController.getSeries);


module.exports = router;