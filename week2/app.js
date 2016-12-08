(function() { //iife: immediately-invoked function expression
  'use strict';

  angular.module('ShoppingApp', [])
  .controller('ShoppingCtrl', ShoppingCtrl);

  ShoppingCtrl.$inject = ['$scope'];
  function ShoppingCtrl($scope){
    $scope.shoppingList1 = ["Tea", "Coffee", "Milk","Juice"];
    $scope.shoppingList2 = [
      {
        name: "Tea",
        quantity : 3
      },
      {
        name: "Coffee",
        quantity : 1
      },
      {
        name: "Milk",
        quantity : 2
      },
      {
        name: "Cookies",
        quantity : 2
      }
    ];

    $scope.addToList = function(){
      var newItem = {
        name: $scope.newItemName,
        quantity: $scope.newItemQty
      };

      $scope.shoppingList2.push(newItem);
    };
  }
})();
