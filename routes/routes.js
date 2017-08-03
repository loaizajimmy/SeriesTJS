let express = require('express');
let router = express.Router();
let controllers = require('../controllers');

router.get('/', controllers.homeController.index);



module.exports = router;