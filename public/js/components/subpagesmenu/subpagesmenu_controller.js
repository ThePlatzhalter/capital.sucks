angular.module('CapitalSucks')
    .controller('subpagesmenuCtrl', [ '$scope', function($scope) {
        let ctrl = this
        $scope.subpages = [ 'test 1', 'test 2', 'test 3', 'test 4', 'test 5', 'test 6', 'test 7' ]
    }])