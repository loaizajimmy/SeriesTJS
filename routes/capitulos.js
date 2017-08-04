let express = require('express');
let router = express.Router();
let controllers = require('../controllers');


router.route('/create/:temporadaID')
    .get(controllers.capitulosController.createGET);
router.post('/create', controllers.capitulosController.createPOST);

router.route('/edit/:capituloID')
    .get(controllers.capitulosController.editGet)
    .put(controllers.capitulosController.editPostMethod);


router.route('/delete/:capituloID')
    .get(controllers.capitulosController.deleteCapituloGet)
    .delete(controllers.capitulosController.deleteCapitulo);


module.exports = router;