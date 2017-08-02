const express = require('express');
let bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 2323;

let app = express();


//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//MiddleWares estaticos
//Se hace para usar CSS-JS-etc
app.use(express.static(path.join(__dirname, 'public')));


// Routes
const seriesRoutes = require('./routes/series');
const routes = require('./routes/routes');

app.use(routes);
app.use("series", seriesRoutes);


//view engine
app.set("view engine", "pug");


app.listen(port, function (err) {
    console.log(`Server running in ${port}`);
});

