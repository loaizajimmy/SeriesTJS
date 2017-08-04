let request = require('request');
const config = require("./config");

module.exports = {
    //Get all series
    createGET: function (req, res) {
        request({
            url: `${config.host}:${config.port}/api/Temporadas/${req.params.temporadaID}`,
            method: 'GET'
        }, function (err, httpResponse, body) {
            res.render('Capitulos/create', {
                title: "Create Cap",
                temporada: JSON.parse(body)
            })
        });
    },
    createPOST: function (req, res) {
        console.log(req.body);
        request({
            url: `${config.host}:${config.port}/api/Capitulos`,
            method: 'POST',
            form: {
                nombre: req.body.nombre,
                numero: req.body.numero,
                video: req.body.video,
                temporadaID: req.body.temporadaID
            }
        }, function (err, httpResponse, body) {
            console.log(body);
            res.redirect('/temporadas/details/' + req.body.temporadaID);
        });
    }
};