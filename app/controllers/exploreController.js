app.controller('exploreController', function( $scope, $http, $location, $routeSegment, Page ) {
	$scope.Page = Page;
	$scope.$routeSegment = $routeSegment;

	$scope.activeCollection = 0;

	$scope.toggleCollection = function(collectionId) {
		if ($scope.activeCollection == collectionId) {
			$scope.activeCollection = 0;
		} else {
			$scope.activeCollection = collectionId;
		}
	};

	$scope.collections = [
	{
		id: 1,
		name: "Nature",
		description: "Some beautiful art pieces of the magnificient nature.",
		art: [ 
		{
			url: "https://images.unsplash.com/photo-1427464407917-c817c9a0a6f6?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			url: "https://images.unsplash.com/photo-1452110040644-6751c0c95836?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			url: "https://images.unsplash.com/photo-1433360405326-e50f909805b3?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		}
		]
	},
	{
		id: 2,
		name: "Tall Buildings",
		description: "Captured between sky high buildings",
		art: [ 
		{
			url: "https://images.unsplash.com/photo-1423768164017-3f27c066407f?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			url: "https://images.unsplash.com/photo-1422157245273-e08b638b4b00?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			url: "https://images.unsplash.com/photo-1449024540548-94f5d5a59230?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		}
		]
	},
	{
		id: 3,
		name: "Mountains",
		description: "Gigantic mountains in the view",
		art: [ 
		{
			url: "https://images.unsplash.com/photo-1443890923422-7819ed4101c0?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			url: "https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			url: "https://images.unsplash.com/photo-1447958374760-1ce70cf11ee3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=ef0b679eb4f3886a72293bdada6098e1"
		}
		]
	},
	{
		id: 2,
		name: "Flowers",
		description: "Lovely flowers in macro shoots for great detail",
		art: [ 
		{
			url: "https://images.unsplash.com/photo-1429979787503-f2d7d20550c8?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			url: "https://images.unsplash.com/photo-1430933964450-0aefb85717c8?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			url: "https://images.unsplash.com/photo-1436985487860-712a3b558087?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		}
		]
	}
	];
});