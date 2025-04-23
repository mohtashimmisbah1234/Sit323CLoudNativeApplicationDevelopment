var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

var server = app.listen(8080, function () {
    console.log("Express App running at http://127.0.0.1:8080/");
});
