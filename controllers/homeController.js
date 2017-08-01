let request = require('request');

module.exports = {

    index: function (req, res, next) {
        res.render('index', {
            title: "Mateo"
        });
    },

    getBuses: function (req, res, next) {
        request({
            url: 'https://smartbusct.herokuapp.com/buses',
            method: 'GET'
        }, function (err, httpResponse, body) {
            console.log(body);
            res.json(JSON.parse(body));
        });
    },

    addBus: function (req, res) {
        request({
            url: 'https://smartbusct.herokuapp.com/buses',
            method: 'POST',
            form:{
                placa: "DOM099",
                capacidad: 2
            }
        }, function (err, httpResponse, body) {
            console.log(body);
            res.json(JSON.parse(body));
        });
    }
};