// Add module and controller here.
var app = angular.module("myModule");

app.controller("loginController", function($scope, loginService) {
  $scope.doStuff = function() {
    loginService.checkLogin($scope.userInfo);
  };
});
