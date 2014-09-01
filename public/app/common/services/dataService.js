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
                    if(successCb) {
                        successCb(data);
                    }
                })
                .error(function (data) {
                    if(errorCb) {
                        errorCb(data);
                    }
                });
        };
        
        DataService.prototype.getEventById = function (id, successCb, errorCb) {
            this._$http
                .get(this._APIURL + 'events/' + id)
                .success(function (data) {
                    if(successCb) {
                        successCb(data);
                    }
                })
                .error(function (data) {
                    if(errorCb) {
                        errorCb(data);
                    }
                });
        };
        
        DataService.prototype.addQuestion = function (eventId, question, successCb, errorCb) {
            this._$http
                .post(this._APIURL + 'events/' + eventId + '/questions', question)
                .success(function (data) {
                    if(successCb) {
                        successCb(data);
                    }
                })
                .error(function (data) {
                    if(errorCb) {
                        errorCb(data);
                    }
                });
        };
        
        DataService.$inject = ['APIURL', '$http'];
        
        return DataService;
        
    }());
    
    angular.module('app.common').service('DataService', DataService);
    
}());