angular.module('CapitalSucks')
    .directive('subpagesmenu', function() {
        return {
            controller: 'subpagesmenuCtrl',
            controllerAs: 'ctrl',
            templateUrl: '/dist/views/menus/subpages.html'
        }
    })