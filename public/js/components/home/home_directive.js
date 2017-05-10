angular.module('CapitalSucks')
    .directive('home', function() {
        return {
            controller: 'homeCtrl',
            controllerAs: 'ctrl',
            templateUrl: '/dist/views/home.html'
        }
    })