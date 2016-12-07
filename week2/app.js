(function() { //iife: immediately-invoked function expression
  'use strict';

    angular.module('MsgApp', [])
    .controller('MsgCtrl', MsgCtrl)
    .filter('loves', LovesFilter);

    MsgCtrl.$inject = ['$scope', '$filter', 'lovesFilter'];
    function MsgCtrl($scope, $filter, lovesFilter){
      $scope.name = "Jen";
      $scope.stateOfBeing = 'hungry';
      $scope.feedCost = 0.57;

      $scope.sayMessage = function(){
        var msg = "likes eating healthy snacks!";
        var output = $filter('uppercase')(msg);
        return output;
      };

      $scope.feedMe = function(){
        $scope.stateOfBeing = 'fed';
      };

      $scope.sayLovesMessage = function(){
        var msg = "likes eating healthy snacks!";
        msg = lovesFilter(msg);
        return msg;
      };
    }

    function LovesFilter(){
      return function(input){
        input = input || "";
        input = input.replace("likes", "loves");
        return input;
      };
    }
})();
