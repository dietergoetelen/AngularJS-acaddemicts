/*global angular*/
(function () {
    'use strict';
    
    var OverviewCtrl = (function () {
        
        function OverviewCtrl() {
            this.message = "Hello, world!";
        }
        
        OverviewCtrl.prototype.changeMessage = function () {
            this.message = "Hello, acADDemICTs!";
        };
        
        return OverviewCtrl;
        
    }());
    
    // Events module ophalen & controller toevoegen
    angular.module('app.events').controller('OverviewCtrl', OverviewCtrl);
}());