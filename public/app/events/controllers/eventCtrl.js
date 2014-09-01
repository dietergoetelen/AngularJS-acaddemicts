/*global angular*/
(function () {
    'use strict';
    
    var EventCtrl = (function () {
        
        function EventCtrl(DataService, $stateParams) {
            this.eventId = $stateParams.id;
            this.dataService = DataService;
            
            this.getEventById(this.eventId);
        }
        
        EventCtrl.prototype.getEventById = function (id) {
            var vm = this;
            
            vm.dataService.getEventById(id, function success(result) {
                vm.event = result;    
            });
        };
        
        EventCtrl.$inject = ['DataService', '$stateParams'];
        
        return EventCtrl;
        
    }());
    
    angular.module('app.events').controller('EventCtrl', EventCtrl);
}());