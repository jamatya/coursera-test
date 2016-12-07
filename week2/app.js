(function() { //iife: immediately-invoked function expression
  'use strict';

  angular.module('CounterApp', [])
  .controller('CounterCtrl', CounterCtrl);

  CounterCtrl.$inject = ['$scope'];
  function CounterCtrl($scope){
    $scope.onceCounter = 0;
    $scope.counter = 0;
    $scope.name = "Test";

    $scope.showNumberOfWatchers = function(){
        console.log("# of watchers:", $scope.$$watchersCount);
    };

    $scope.countOnce = function(){
      $scope.onceCounter = 1;
      //onsole.log("onceCounter: ", $scope.onceCounter);
    };

    $scope.upCounter = function(){
      $scope.counter++;
      //console.log("counter: ",$scope.counter);
    };

    $scope.$watch(function(){
      console.log("Digest Loop fired");
    });

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
