(function(){
'use strict';

angular.module('LunchChecker',[])
.controller('LunchCheckerCtrl', LunchCheckerCtrl);

LunchCheckerCtrl.$inject = ['$scope'];
function LunchCheckerCtrl($scope){
  $scope.dishes = "";
  $scope.message = "No message set";

  $scope.CheckMenu = function(){
    if ($scope.dishes.length == 0) {
        $scope.message = "Please enter the data";
        return;
    }

    var list = $scope.dishes.split(',');
    console.log("Dishes:" + list);
    console.log("Dishes Count:" + list.length);

    if(list.length > 3)
      $scope.message = "Too much!";
    else
      $scope.message = "Enjoy!";
  };
};
})();
