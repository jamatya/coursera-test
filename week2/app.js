(function() { //iife: immediately-invoked function expression
  'use strict';

  angular.module('BindingApp', [])
  .controller('BindingCtrl', BindingCtrl);

  BindingCtrl.$inject = ['$scope'];
  function BindingCtrl($scope){
    $scope.firstName = "Jen";
    //$scope.fullName = "";

    $scope.showNumberOfWatchers = function(){
      console.log("# of watchers: ", $scope.$$watchersCount);
    };

    $scope.setFullName = function(){
      $scope.fullName = $scope.firstName + " " + "A";
    };

    $scope.logFirstName = function(){
      console.log("First Name is:" + $scope.firstName);
    };

    $scope.logFullName = function(){
      console.log("Full Name is:", $scope.fullName);
    };
  }
})();
