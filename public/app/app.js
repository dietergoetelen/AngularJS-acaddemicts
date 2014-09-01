/*global angular*/
(function () {
    'use strict';
    
    var app = angular.module('app', [
        'app.events',
        'ui.router'
    ]);
    
    app.constant('APIURL', 'http://localhost:3000/api/');
    
}());