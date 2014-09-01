/*global angular*/
(function () {
    'use strict';
    
    var OverviewCtrl = (function () {
        
        function OverviewCtrl(DataService) {
            this.message = "Hello, world!";
            this.dataService = DataService;
            
            this.newQuestion = false;
            
            this.getEvents();
        }
        
        OverviewCtrl.prototype.getEvents = function () {
            var vm = this;
            
            vm.dataService.getEvents(function success(result) {
                vm.events = result;
            });
        };
        
        OverviewCtrl.prototype.changeMessage = function () {
            this.message = "Hello, acADDemICTs!";
        };
        
        OverviewCtrl.$inject = ['DataService'];
        
        return OverviewCtrl;
        
    }());
    
    // Events module ophalen & controller toevoegen
    angular.module('app.events').controller('OverviewCtrl', OverviewCtrl);
}());