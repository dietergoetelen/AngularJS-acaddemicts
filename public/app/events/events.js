/*global angular*/
(function () {
    'use strict';
    
    var app = angular.module('app.events', [
        'ui.router'
    ]);
    
    app.config(['$stateProvider',
                function ($stateProvider) {
                    
                    $stateProvider
                        .state('events', {
                            url: '/events',
                            templateUrl: 'app/events/views/events.html'
                        })
                        .state('events.detail', {
                            url: '/:id',
                            templateUrl: 'app/events/views/events.detail.html'
                        });
                    
                }
           ]);
    
}());