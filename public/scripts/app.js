var app = angular.module('News', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginCtlr'
        })
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'homeCtlr'
        })
        .otherwise({ redirectTo: '/home'});
}]);