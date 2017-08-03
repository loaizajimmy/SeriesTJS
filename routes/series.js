let express = require('express');
let router = express.Router();
let controllers = require('../controllers');


router.get('/', controllers.seriesController.getSeries);
router.get('/Details/:serieID', controllers.seriesController.getSerie);
router.route('/create')
    .get(controllers.seriesController.createSerie)
    .post(controllers.seriesController.postSerie);

module.exports = router;