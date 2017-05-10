angular.module('CapitalSucks')
    .controller('categoriesmenuCtrl', [ '$scope', function($scope) {
        $scope.categories = [
            {
                'name': 'Test 1',
                'subcategories': [ 'Test 1.1', 'Test 1.2', 'Test 1.3', 'Test 1.4' ]
            },
            {
                'name': 'Test 1',
                'subcategories': [ 'Test 1.1', 'Test 1.2', 'Test 1.3', 'Test 1.4' ]
            },
            {
                'name': 'Test 1',
                'subcategories': [ 'Test 1.1', 'Test 1.2', 'Test 1.3', 'Test 1.4' ]
            },
            {
                'name': 'Test 1',
                'subcategories': [ ]
            },
            {
                'name': 'Test 1',
                'subcategories': [ 'Test 1.1', 'Test 1.2', 'Test 1.3', 'Test 1.4' ]
            },
            {
                'name': 'Test 1',
                'subcategories': [ 'Test 1.1', 'Test 1.2', 'Test 1.3', 'Test 1.4' ]
            },
            {
                'name': 'Test 1',
                'subcategories': [ 'Test 1.1', 'Test 1.2', 'Test 1.3', 'Test 1.4' ]
            }
        ]
    }])