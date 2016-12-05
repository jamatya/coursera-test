(function() { //iife: imeediately-invoked function expression
  'use strict';
  angular.module('myFirstApp', [])
  .controller('MyFirstController', function($scope){ //share data between view and view model
      $scope.name = "Jen";
      $scope.sayHello = function(){
        return "Hello Coursera";
      };
  });
})();
