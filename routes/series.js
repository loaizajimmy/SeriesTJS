let express = require('express');
let router = express.Router();
let controllers = require('../controllers');


router.get('/', controllers.seriesController.getSeries);
router.get('/Details/:serieID', controllers.seriesController.getSerie);

router.route('/create')
    .get(controllers.seriesController.createSerie)
    .post(controllers.seriesController.postSerie);

router.route('/Delete/:serieID')
    .get(controllers.seriesController.deleteSerieGet)
    .delete(controllers.seriesController.deleteSerie);

router.route('/edit/:serieID')
    .get(controllers.seriesController.editGet)
    .put(controllers.seriesController.editPostMethod);

module.exports = router;