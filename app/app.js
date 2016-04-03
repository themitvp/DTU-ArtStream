var app = angular.module('artstreamApp', ['ngRoute', 'route-segment', 'view-segment', 'ngAnimate', 'angular-loading-bar', 'ui.tree', 'ui.bootstrap']);

var resolve = {
    delay: function ($q, $timeout) {
        var delay = $q.defer();
        $timeout(delay.resolve, 0, false);
        return delay.promise;
    }
};

app.factory('Page', function () {
    var title = 'ArtStream';
    return {
        title: function () {
            return title;
        },
        setTitle: function (newTitle) {
            title = newTitle + " | ArtStream";
        }
    };
});

// configure our routes
app.config(function ($routeSegmentProvider, $locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    $routeSegmentProvider.options.autoLoadTemplates = true;

    $routeSegmentProvider.otherwise = function (route) {
        $routeProvider.otherwise({redirectTo: route});
        return this;
    };


    $routeSegmentProvider

        .when('/', 'explore')
        .when('/setup', 'setup')
        .when('/search', 'search')
        .when('/dashboard', 'dashboard')
        .otherwise('/')

        .segment('explore', {
            default: true,
            templateUrl: 'app/views/explore.html?1',
            controller: 'exploreController'
        })

        .segment('setup', {
            templateUrl: 'app/views/setup.html?1',
            controller: 'setupController'
        })

        .segment('search', {
            templateUrl: 'app/views/search.html?1',
            controller: 'searchController'
        })

        .segment('dashboard', {
            templateUrl: 'app/views/dashboard.html?1',
            controller: 'dashboardController'
        })
});

app.run(function ($rootScope, $window) {
    // publish current transition direction on rootScope
    $rootScope.direction = 'left';
    // listen change start events
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
        $rootScope.direction = 'right';
        // console.log(arguments);
        if (current && next && (current.depth > next.depth)) {
            $rootScope.direction = 'left';
        }
        // back
        $rootScope.back = function () {
            $window.history.back();
        };
    });
});