angular.module('News')
    .filter('rssDate', function () {
        return function (value) {
            return new Date(value).toLocaleString();
        };
    });