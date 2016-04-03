app.controller('exploreController', function( $scope, $http, $location, $routeSegment, Page ) {
    $scope.Page = Page;
    $scope.$routeSegment = $routeSegment;
});