(function() { //iife: immediately-invoked function expression
  'use strict';

  angular.module('DIApp', [])
  //.controller('DIController', ['$scope', '$filter', DIController]);
  .controller('DIController', DIController);

  DIController.$inject = ['$scope', '$filter'];
  function DIController($scope, $filter){
    $scope.name = "Jen";

    $scope.upper = function(){
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };
  }
})();
