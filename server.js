/*global require, console*/
(function () {
    'use strict';
    
    var express = require('express'),
        app = express(),
        bodyParser = require('body-parser');
    
    app.use(express.static(__dirname + '/public'));
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    
    require('./app/router')(app);
    
    app.listen(3000, function () {
        console.log('Server listening on port', 3000);
    });
}());