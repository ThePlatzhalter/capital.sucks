angular.module('CapitalSucks').config([ '$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
    $routeProvider.when('/', {
        template: '<home></home>'
    }).otherwise('/')

    $routeProvider.when('/login', {
        template: '<login></login>'
    })

    $locationProvider.html5Mode(true)
} ])