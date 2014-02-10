var zombieApp = angular.module("zombieApp", []);

zombieApp.controller("ZombieListCtrl", ["$scope", "$http",
  function($scope, $http){
    $http.get("zombies/zombies.json").success(function(data){
      $scope.zombies = data;
    });

    $scope.orderProp = "-year";
}]);