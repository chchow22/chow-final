// Add module and controller here.
var app = angular.module("myModule");

app.controller("profileController", function($scope, loginService) {
  $scope.userDetails = loginService.getProfile();
  
});
