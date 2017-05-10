angular.module('CapitalSucks')
    .directive('login', function() {
        return {
            controller: 'loginCtrl',
            controllerAs: 'ctrl',
            templateUrl: '/dist/views/login.html'
        }
    })