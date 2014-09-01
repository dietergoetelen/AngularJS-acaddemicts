/*global angular*/
(function () {
    'use strict';
    
    var DataService = (function () {
        
        function DataService(APIURL, $http) {
            this._APIURL = APIURL;
            this._$http = $http;
        }
        
        DataService.prototype.getEvents = function (successCb, errorCb) {
            this._$http
                .get(this._APIURL + 'events')
                .success(function (data) {
                    successCb(data);
                })
                .error(function (data) {
                    errorCb(data);
                });
        };
        
        DataService.$inject = ['APIURL', '$http'];
        
        return DataService;
        
    }());
    
    angular.module('app.common').service('DataService', DataService);
    
}());