const express = require('express');
let bodyParser = require('body-parser');
const path = require('path');
let methodOverride = require("method-override");

const port = process.env.PORT || 2323;

let app = express();


//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Method Override
app.use(methodOverride("_method"));

//MiddleWares estaticos
//Se hace para usar CSS-JS-etc
app.use(express.static(path.join(__dirname, 'public')));


// Routes
const routes = require('./routes/routes');
const seriesRoutes = require("./routes/series");
const temporadasRoutes = require("./routes/temporadas");
const capitulosRoutes = require("./routes/capitulos");

app.use(routes);
app.use('/series', seriesRoutes);
app.use('/temporadas', temporadasRoutes);
app.use('/capitulos', capitulosRoutes);

//view engine
app.set("view engine", "pug");


app.listen(port, function (err) {
    console.log(`Server running in ${port}`);
});

