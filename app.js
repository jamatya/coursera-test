(function() { //iife: immediately-invoked function expression
  'use strict';

  angular.module('NameCalculator', [])
    .controller('NameCalculatorCtrl', function($scope){
        $scope.name="";
        $scope.totalValue = 0;

        $scope.displayNumeric = function(){
            var totalNameValue = calculateNumericForString($scope.name);
            $scope.totalValue = totalNameValue;
        };
    });

    function calculateNumericForString(string){
      var totalStringValue = 0;
      for(var i=0; i<string.length;i++){
        totalStringValue += string.charCodeAt(i);
      }
      return totalStringValue;
    }

/*  angular.module('myFirstApp', [])
  .controller('MyFirstController', function($scope){ //share data between view and view model
      $scope.name = "Jen";
      $scope.sayHello = function(){
        return "Hello Coursera";
      };
  });*/
})();
