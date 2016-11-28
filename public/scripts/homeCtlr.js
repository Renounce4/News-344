angular.module('News')
    //.service('DataService', function () {})
    .controller('homeCtlr', ['$scope', '$location', function ($scope, $location) {

        $scope.sources = ["here", "there", "anywhere"];

    }]);
