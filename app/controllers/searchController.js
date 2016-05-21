app.controller('searchController', function( $scope, $http, $location, $routeSegment, Page ) {
    $scope.Page = Page;
    $scope.$routeSegment = $routeSegment;

    $scope.clickCategory = function() {
    }; 

    $scope.categories = [
    	{
    		title: "Landscape",
    		url: "https://images.unsplash.com/photo-1444948349385-a7749b254e33?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=ea5ecccda26dd6ba058289b82876859f"
    	},
    	{
    		title: "Abstract",
    		url: "http://www.splitshire.com/wp-content/uploads/2015/02/SplitShire_lowpoly_II-1800x1200.jpg"
    	},
    	{
    		title: "Photography",
    		url: "https://static.pexels.com/photos/17679/pexels-photo-large.jpg"
    	},
    	{
    		title: "Nature",
    		url: "https://images.unsplash.com/photo-1429979787503-f2d7d20550c8?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
    	},
    	{
    		title: "Urban",
    		url: "https://images.unsplash.com/photo-1449024540548-94f5d5a59230?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
    	},
    	{
    		title: "Oil Painting",
    		url: "https://farm3.staticflickr.com/2943/15340794762_c0c1e66289_c.jpg"
    	},
    	{
    		title: "Video",
    		url: "https://images.unsplash.com/photo-1434434319959-1f886517e1fe?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=218dfdd2c0735dbd6ca0f718064a748b"
    	},
    	{
    		title: "Graphic",
    		url: "https://d13yacurqjgara.cloudfront.net/users/648290/screenshots/2726160/business_dribbble.jpg"
    	}
    ];
});