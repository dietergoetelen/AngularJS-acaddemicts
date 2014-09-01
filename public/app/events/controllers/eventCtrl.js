/*global angular*/
(function () {
    'use strict';
    
    var EventCtrl = (function () {
        
        function EventCtrl(DataService, $stateParams) {
            this.eventId = $stateParams.id;
            this.dataService = DataService;
            
            this.newQuestion = false;
            this.question = {};
            
            this.getEventById(this.eventId);
        }
        
        EventCtrl.prototype.getEventById = function (id) {
            var vm = this;
            
            vm.dataService.getEventById(id, function success(result) {
                vm.event = result;    
            });
        };
        
        EventCtrl.prototype.displayForm = function (value) {
            this.question = {};
            this.newQuestion = value;
        };
        
        EventCtrl.prototype.saveQuestion = function (question) {
            if (question.name && question.question) {
                this.event.questions.push(question);

                // Todo: Save into database

                this.displayForm(false);    
            }
        };
        
        EventCtrl.$inject = ['DataService', '$stateParams'];
        
        return EventCtrl;
        
    }());
    
    angular.module('app.events').controller('EventCtrl', EventCtrl);
}());