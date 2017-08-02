let express = require('express');
let router = express.Router();
let controllers = require('../controllers');

router.get('/', controllers.homeController.index);
router.get('/Series', controllers.seriesController.getSeries);


module.exports = router;