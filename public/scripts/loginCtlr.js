angular.module('News')
    .controller('loginCtlr', ['$scope', '$location', function ($scope, $location) {

        $scope.login = function(usr, pass) {
            alert("hi");
        };

    }]);
