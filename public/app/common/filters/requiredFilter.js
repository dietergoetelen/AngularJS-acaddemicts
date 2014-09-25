'use strict';

angular.module('app.common').filter('required', function () {
   return function (input) {
      var symbol = arguments[1] || '*',
          message = arguments[2] || 'is required';
        
      return [symbol, input, message].join(' ');
   };
});