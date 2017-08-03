let request = require('request');
const config = require("./config");

module.exports = {
    //Get all series
    getSeries: function (req, res) {
        request({
            url: `${config.host}:${config.port}/api/Series`,
            method: 'GET'
        }, function (err, httpResponse, body) {
            res.render('series/index', {
                title: "series",
                series: JSON.parse(body)
            })
        });
    },
    //Get Create
    createSerie: function (req, res) {
        res.render('series/create', {
            title: "Create"
        });
    },
    postSerie: function (req, res) {
        //console.log(req.body);
        request({
            url: `${config.host}:${config.port}/api/Series`,
            method: 'POST',
            form: {
                nombre: req.body.nombre,
                fechaEstreno: req.body.fechaEstreno,
                enEmision: req.body.enEmision,
                genero: req.body.genero,
                image: req.body.imagen
            }
        }, function (err, httpResponse, body) {
            res.redirect('/series');
            //res.json(JSON.parse(body));
        });
    },

};