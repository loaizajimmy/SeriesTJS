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
            url:`${config.host}:${config.port}/api/Temporadas/${req.params.temporadaID}`,
            method: 'GET'
        }, function (err, httpResponse, body) {
            res.render('Temporadas/details',{
                title:"Temp Detail",
                temporada: JSON.parse(body),
                serie: JSON.parse(body).serie
            })
        });
    }

};