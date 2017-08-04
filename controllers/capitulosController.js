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
    },

    deleteCapituloGet: function (req, res) {
        request({
            url: `${config.host}:${config.port}/api/Capitulos/${req.params.capituloID}`,
            method: 'GET'
        }, function (err, httpResponse, body) {
            res.render('capitulos/delete', {
                title: "Delete Cap",
                capitulo: JSON.parse(body)
            })
        });
    },

    //Edit Serie
    editGet: function (req, res) {
        request({
                url: `${config.host}:${config.port}/api/Capitulos/${req.params.capituloID}`,
                method: 'GET'
            },
            function (err, httpResponse, body) {
                res.render('Capitulos/edit', {
                    title: "Cap Edit",
                    capitulo: JSON.parse(body)
                })
            });
    },

    editPostMethod: function (req, res) {
        request({
            url: `${config.host}:${config.port}/api/Capitulos/${req.params.capituloID}`,
            method: 'PUT',
            body: {
                capituloID: req.params.capituloID,
                numero: req.body.numero,
                nombre: req.body.nombre,
                temporadaID: req.body.temporadaID
            },
            json: true,
            headers: {
                'User-Agent': 'request'
            }
        }, function (err, httpResponse, body) {
            console.log(body);
            res.redirect('/temporadas/details/' + req.body.temporadaID);
        });
    },


    deleteCapitulo: function (req, res) {
        //console.log(req.body);
        request({
            url: `${config.host}:${config.port}/api/Capitulos/${req.params.capituloID}`,
            method: 'DELETE'
        }, function (err, httpResponse, body) {
            console.log(body);
            res.redirect('/temporadas/details/' + req.body.temporadaID);
            //res.json(JSON.parse(body));
        });
    }

};