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
            var vm = this;
            
            if (question.name && question.question) {

                vm.dataService.addQuestion(this.eventId, question, function success(result) {
                    vm.event.questions.push(question);
                });
                
                vm.displayForm(false);    
            }
        };
        
        EventCtrl.$inject = ['DataService', '$stateParams'];
        
        return EventCtrl;
        
    }());
    
    angular.module('app.events').controller('EventCtrl', EventCtrl);
}());