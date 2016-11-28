angular.module('News')
    //.service('DataService', function () {})
    .controller('homeCtlr', ['$scope', '$location', function ($scope, $location) {

        $scope.sources = ["CNN", "BBC News", "ESPN", "People Magazine"];

        $scope.load = function () {
            var cnnCheck = document.getElementById("CNN");
            var bbcCheck = document.getElementById("BBC News");
            var espnCheck = document.getElementById("ESPN");
            var pmCheck = document.getElementById("People Magazine");
            var feeds = [];
            if(cnnCheck) {
                feeds.append("http://rss.cnn.com/rss/edition_world.rss");
            }
            if(bbcCheck) {
                feeds.append("http://feeds.bbci.co.uk/news/world/rss.xml");
            }
            if(espnCheck) {
                feeds.append("http://sports.espn.go.com/espn/rss/news");
            }
            if(pmCheck) {
                feeds.append("http://feeds.people.com/people/headlines");
            }
            var options = {
                linkTarget : google.feeds.LINK_TARGET_BLANK,
                pauseOnHover : false,
                stacked : true
            };
            new GFdynamicFeedControl(feeds, "feedControl", options);

        };
        google.load("feeds", "1");
        google.setOnLoadCallback($scope.load());
    }]);
