/*global angular*/
(function () {
    'use strict';
    
    var app = angular.module('app', [
        'app.events',
        'app.common',
        'ui.router'
    ]);
    
    app.config(['$stateProvider', '$urlRouterProvider',
                function ($stateProvider, $urlRouterProvider) {
                    $urlRouterProvider.otherwise('/events');
                }
           ]);
    
    app.constant('APIURL', 'http://localhost:3000/api/');
}());