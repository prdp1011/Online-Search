
var app = angular.module('free', [
   
    'ngRoute',
    'ui.bootstrap',
    'ngAnimate',
    
]);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('');
    $routeProvider
    .when("/", {
        templateUrl : "views/main.html",
        controller:'main'
    })
    .when("/signup", {
        templateUrl : "views/pages/signup.html",
        controller:'signupCtrl'
    }).when("/salary", {
        templateUrl : "views/pages/empSalary.html",
        controller:'salaryCtrl'
    }).when("/pages/hour/:id/:year", {
        templateUrl : "views/pages/hour.html",
        controller:'hour'
    }).when("/pages/daywiseData/:id/:year", {
        templateUrl : "views/pages/daywiseData.html",
        controller:'daywiseData'
    })
    .otherwise({
    redirectTo: '/404'
});
});
