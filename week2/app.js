(function() { //iife: immediately-invoked function expression
  'use strict';

    angular.module('MsgApp', [])
    .controller('MsgCtrl', MsgCtrl);

    MsgCtrl.$inject = ['$scope', '$filter'];
    function MsgCtrl($scope, $filter){
      $scope.name = "Jen";
      $scope.stateOfBeing = 'hungry';
      $scope.feedCost = 0.57;

      $scope.sayMessage = function(){
        var msg = "Eat healthy snacks!";
        var output = $filter('uppercase')(msg);
        return output;
      };

      $scope.feedMe = function(){
        $scope.stateOfBeing = 'fed';
      };
    };
})();
