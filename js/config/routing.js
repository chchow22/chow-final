// Add module here.
var app = angular.module("myModule");

// Routing goes here.
app.config(function($routeProvider) {
  $routeProvider

  .when("/login", {
    controller: "loginController",
    templateUrl: "../../partials/login.html"
  })

  .when("/profile", {
    controller: "profileController",
    templateUrl: "../../partials/profile.html"
  })

  .otherwise({
    redirectTo: "/login"
  });
});
