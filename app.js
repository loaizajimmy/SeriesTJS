const express = require('express');
let bodyParser = require('body-parser');
const path = require('path');

let app = express();

//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(express.static(path.join(__dirname, 'public'))); //Se hace para usar CSS-JS-etc MiddleWares estaticos
// Routes
const routes = require('./routes/routes');
app.use(routes);

//view engine
app.set("view engine", "pug");

app.listen(8080, function (err) {
    console.log("Server running in 8080");
});

