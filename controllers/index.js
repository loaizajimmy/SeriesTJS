//this is a auto loader controllers

let fs = require('fs');
let path = require('path');

//read all files in the work dir
let files = fs.readdirSync(__dirname);

files.forEach(function (file) {
    const fileName = path.basename(file, '.js');
    if (fileName !== "index") {
        console.log(fileName);
        exports[fileName] = require(`./${fileName}`);
    }
});