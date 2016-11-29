angular.module('News')
    .controller('loginCtlr', ['$scope', '$window', function ($scope, $window) {

        $scope.login = function() {
            $window.location.href = '/home.html';
        };

    }]);
