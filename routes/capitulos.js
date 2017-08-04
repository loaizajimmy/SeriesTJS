let express = require('express');
let router = express.Router();
let controllers = require('../controllers');


router.route('/create/:temporadaID')
    .get(controllers.capitulosController.createGET);
router.post('/create', controllers.capitulosController.createPOST);

module.exports = router;