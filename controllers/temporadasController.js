let request = require('request');
const config = require("./config");

module.exports = {
    //Get all series
    createGET: function (req, res) {
        request({
            url: `${config.host}:${config.port}/api/Series/${req.params.serieID}`,
            method: 'GET'
        }, function (err, httpResponse, body) {
            res.render('Temporadas/create', {
                title: "Create Temp",
                serie: JSON.parse(body)
            })
        });
    },

    createPOST: function (req, res) {
        request({
            url: `${config.host}:${config.port}/api/Temporadas`,
            method: 'POST',
            form: {
                fechaEstreno: req.body.fechaEstreno,
                enEmision: req.body.enEmision,
                valor: req.body.valor,
                numero: req.body.numero,
                serieID: req.body.serieID
            }
        }, function (err, httpResponse, body) {
            res.redirect('/series/details/' + req.body.serieID);
        });
    },

    details: function (req, res) {
        request({
            url: `${config.host}:${config.port}/api/Temporadas/${req.params.temporadaID}`,
            method: 'GET'
        }, function (err, httpResponse, body) {
            res.render('Temporadas/details', {
                title: "Temp Detail",
                temporada: JSON.parse(body),
                serie: JSON.parse(body).serie
            })
        });
    },
    deleteSerie: function (req, res) {
        //console.log(req.body);
        request({
            url: `${config.host}:${config.port}/api/Series/${req.params.serieID}`,
            method: 'DELETE'

        }, function (err, httpResponse, body) {
            console.log(body);
            res.redirect('/series');
            //res.json(JSON.parse(body));
        });
    },

    //Edit Serie
    editGet: function (req, res) {
        request({
            url: `${config.host}:${config.port}/api/Temporadas/${req.params.temporadaID}`,
            method: 'GET'
        },
        function (err, httpResponse, body) {
            res.render('temporadas/edit', {
                title: "Temp Edit",
                temporada: JSON.parse(body)
            })
        });
    },

    editPostMethod: function (req, res) {
        request({
            url: `${config.host}:${config.port}/api/Temporadas/${req.params.temporadaID}`,
            method: 'PUT',
            body: {
                temporadaID: req.params.temporadaID,
                numero: req.body.numero,
                fechaEstreno: req.body.fechaEstreno,
                enEmision: req.body.enEmision === 'on',
                valor: req.body.valor,
                serieID: req.body.serieID
            },
            json: true,
            headers: {
                'User-Agent': 'request'
            }
        }, function (err, httpResponse, body) {
            console.log(body);
            res.redirect('/temporadas/details/' + req.params.temporadaID);
        });
    },

    deleteTemporadaGet: function (req, res) {
        request({
            url: `${config.host}:${config.port}/api/Temporadas/${req.params.temporadaID}`,
            method: 'GET'
        }, function (err, httpResponse, body) {
            res.render('temporadas/delete', {
                title: "Delete",
                temporada: JSON.parse(body)
            })
        });
    },

    deleteTemporada: function (req, res) {
        //console.log(req.body);
        request({
            url: `${config.host}:${config.port}/api/Temporadas/${req.params.temporadaID}`,
            method: 'DELETE'

        }, function (err, httpResponse, body) {
            console.log(body);
            res.redirect('/series/details/' + req.body.serieID);
            //res.json(JSON.parse(body));
        });
    }

};