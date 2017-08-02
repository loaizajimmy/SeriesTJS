let request = require('request');
const config = require("./config");

module.exports = {
    //Get all series
    getSeries: function (req, res) {
        request({
            url:`${config.host}:${config.port}/api/Series`,
            method: 'GET'
        }, function (err, httpResponse, body) {
            console.log(body);
            res.json(JSON.parse(body));
        });
    }
};