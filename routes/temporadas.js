let express = require('express');
let router = express.Router();
let controllers = require('../controllers');


router.route('/create/:serieID')
    .get(controllers.temporadasController.createGET);
router.post('/create', controllers.temporadasController.createPOST);

router.get('/details/:temporadaID', controllers.temporadasController.details);


module.exports = router;