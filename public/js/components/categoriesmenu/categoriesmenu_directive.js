angular.module('CapitalSucks')
    .directive('categoriesmenu', function() {
        return {
            controller: 'categoriesmenuCtrl',
            controllerAs: 'ctrl',
            templateUrl: '/dist/views/menus/categories.html'
        }
    })