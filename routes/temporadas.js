let express = require('express');
let router = express.Router();
let controllers = require('../controllers');


router.route('/create/:serieID')
    .get(controllers.temporadasController.createGET);
router.post('/create', controllers.temporadasController.createPOST);

router.get('/details/:temporadaID', controllers.temporadasController.details);

router.route('/edit/:temporadaID')
    .get(controllers.temporadasController.editGet)
    .put(controllers.temporadasController.editPostMethod);

router.route('/delete/:temporadaID')
    .get(controllers.temporadasController.deleteTemporadaGet)
    .delete(controllers.temporadasController.deleteTemporada);


module.exports = router;