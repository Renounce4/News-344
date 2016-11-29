var app = angular.module('News', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/login', {
            templateUrl: 'pages/login.html',
            controller: 'loginCtlr'
        })
        .when('/home', {
            templateUrl: 'pages/home.html',
            controller: 'homeCtlr'
        })
        .otherwise({ redirectTo: '/login'});
}]);

app.controller('homeCtlr', ['$scope', '$location', function ($scope, $location) {

    $scope.sources = ["CNN", "BBC News", "ESPN", "People Magazine"];
    $scope.selected_sources = ["CNN", "BBC News", "ESPN", "People Magazine"];
    $scope.emptySource = false;

    $scope.getCookie = function getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        };

    $scope.toggleSelection = function toggleSelection(source) {
        var idx = $scope.selected_sources.indexOf(source);

        // is currently selected
        if (idx > -1) {
            $scope.selected_sources.splice(idx, 1);
        }

        // is newly selected
        else {
            $scope.selected_sources.push(source);
        }
        google.load("feeds", "1");
        google.setOnLoadCallback($scope.load());
    };

    $scope.seeAll = function() {
        alert("All");
    };

    $scope.seeFav = function () {
        alert("Fav");
    };

    $scope.load = function () {
        var feeds = [];
        if($scope.selected_sources.indexOf("CNN") > -1) {
            feeds.push("http://rss.cnn.com/rss/edition_world.rss");
        }
        if($scope.selected_sources.indexOf("BBC News") > -1) {
            feeds.push("http://feeds.bbci.co.uk/news/world/rss.xml");
        }
        if($scope.selected_sources.indexOf("ESPN") > -1) {
            feeds.push("http://sports.espn.go.com/espn/rss/news");
        }
        if($scope.selected_sources.indexOf("People Magazine") > -1) {
            feeds.push("http://feeds.people.com/people/headlines");
        }
        var options = {
            linkTarget : google.feeds.LINK_TARGET_BLANK,
            pauseOnHover : false,
            stacked : true
        };
        if(feeds.length == 0) {$scope.emptySource = true;}
        else {$scope.emptySource = false;}
        new GFdynamicFeedControl(feeds, "feedControl", options);

    };
    google.load("feeds", "1");
    google.setOnLoadCallback($scope.load());
}]);

app.controller('loginCtlr', ['$scope', '$window', function ($scope, $window) {

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    $scope.login = function() {
        document.cookie = "lastVisit=" + getCookie("currVisit");
        document.cookie = "currVisit=" + new Date();
        $window.location.href = '#home';
    };

}]);
