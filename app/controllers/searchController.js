app.controller('searchController', function( $scope, $http, $location, $routeSegment, Page ) {
    $scope.Page = Page;
    $scope.$routeSegment = $routeSegment;
});