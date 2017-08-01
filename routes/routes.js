let express = require('express');
let router = express.Router();
let controllers = require('../controllers');

router.get('/', controllers.homeController.index);
router.get('/buses', controllers.homeController.getBuses);
router.get('/addBus', controllers.homeController.addBus);

module.exports = router;