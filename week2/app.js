(function() { //iife: immediately-invoked function expression
  'use strict';

  angular.module('CounterApp', [])
  .controller('CounterCtrl', CounterCtrl);

  CounterCtrl.$inject = ['$scope', '$timeout'];
  function CounterCtrl($scope, $timeout){

    $scope.counter = 0;
    $scope.upCounter = function(){
      $timeout(function(){
        $scope.counter++;
        console.log("Counter incremented");
      }, 2000);
    };

    /*$scope.upCounter = function(){
      setTimeout(function(){
        $scope.$apply(function(){
          $scope.counter++;
          console.log("Counter incremented");;
        });
      }, 2000);
    };*/

    /*$scope.upCounter = function(){
      setTimeout(function(){
        $scope.counter++;
        console.log("counter incremented!");
        $scope.$digest();
      }, 2000);*/

      //console.log("counter: ",$scope.counter);
    //};

  /*  $scope.$watch('onceCounter', function(newValue, oldValue){
      console.log("onceCounter old Value", oldValue);
        console.log("onceCounter new Value", newValue);
    });

    $scope.$watch('counter', function(newValue, oldValue){
      console.log("counter old Value", oldValue);
      console.log("counter new Value", newValue);
    });*/
  }

    /*
    //Custom Filter
    angular.module('MsgApp', [])
    .controller('MsgCtrl', MsgCtrl)
    .filter('loves', LovesFilter)
    .filter('truth', TruthFilter);

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

    function TruthFilter(){
      return function (input, target, replace){
        input = input || "";
        input = input.replace(target, replace);
        return input;
      }
    }*/
})();
