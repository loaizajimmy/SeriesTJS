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
                title: "Series",
                series: JSON.parse(body)
            })
        });
    },

    getSerie: function (req, res) {
        request({
            url: `${config.host}:${config.port}/api/Series/${req.params.serieID}`,
            method: 'GET'
        }, function (err, httpResponse, body) {
            res.render('series/details', {
                title: "Serie Detail",
                serie: JSON.parse(body)
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
    //Edit Serie
    editGet: function (req, res) {
        request({
                url: `${config.host}:${config.port}/api/Series/${req.params.serieID}`,
                method: 'GET'
            }
            , function (err, httpResponse, body) {
                res.render('Series/edit', {
                    title: "Series Edit",
                    serie: JSON.parse(body)
                })
            });
    },

    editPost: function (req, res) {
        console.log(req.body);
        const emision = req.body.enEmision === 'on';
        console.log(emision);
        request({
            url: `${config.host}:${config.port}/api/Series/${req.params.serieID}`,
            method: 'PUT',
            body: {
                serieID: req.params.serieID,
                nombre: req.body.nombre,
                fechaEstreno: req.body.fechaEstreno,
                enEmision: emision,
                genero: req.body.genero,
                image: req.body.imagen
            },
            json: true,
            headers: {
                'User-Agent': 'request'
            }
        }, function (err, httpResponse, body) {
            console.log(body);
            res.json({'mensaje': 'true'});
            //res.json(JSON.parse(body));
        });
    },

    editPostMethod: function (req, res) {

        request({
            url: `${config.host}:${config.port}/api/Series/${req.params.serieID}`,
            method: 'PUT',
            body: {
                serieID: req.params.serieID,
                nombre: req.body.nombre,
                fechaEstreno: req.body.fechaEstreno,
                enEmision: req.body.enEmision === 'on',
                genero: req.body.genero,
                image: req.body.imagen
            },
            json: true,
            headers: {
                'User-Agent': 'request'
            }
        }, function (err, httpResponse, body) {
            res.redirect('/series/details/' + req.params.serieID);
        });
    },
    deleteSerieGet: function (req, res) {
        request({
            url:`${config.host}:${config.port}/api/Series/${req.params.serieID}`,
            method: 'GET'
        }, function (err, httpResponse, body) {
            res.render('series/delete',{
                title:"Delete",
                serie: JSON.parse(body)
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
    }
};