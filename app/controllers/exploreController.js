app.controller('exploreController', function( $scope, $http, $location, $routeSegment, Page ) {
	$scope.Page = Page;
	$scope.$routeSegment = $routeSegment;

	$scope.highligedArtist = "";

	$scope.highlightArtist = function(value) {
		$scope.highligedArtist = value;
	};

	$scope.isHighlightedArtist = function(value) {
		if (angular.isDefined($scope.highligedArtist)) {
			return $scope.highligedArtist == value;
		}
		return false;
	};

	$scope.activeCollection = 0;

	$scope.addToCollection = function(collection, $event) {
		$event.stopPropagation();
		collection.selected = !collection.selected;
	};

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
		selected: false,
		art: [ 
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1427464407917-c817c9a0a6f6?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			artist: "Mike Been",
			url: "https://images.unsplash.com/photo-1452110040644-6751c0c95836?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			artist: "Michael Bourgh",
			url: "https://images.unsplash.com/photo-1433360405326-e50f909805b3?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			artist: "Nick Save",
			url: "https://images.unsplash.com/photo-1429979787503-f2d7d20550c8?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			artist: "Mike Been",
			url: "https://images.unsplash.com/photo-1443890923422-7819ed4101c0?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			artist: "Mike Been",
			url: "https://images.unsplash.com/photo-1447958374760-1ce70cf11ee3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=ef0b679eb4f3886a72293bdada6098e1"
		},
		{
			artist: "Susanne Feldt",
			url: "https://images.unsplash.com/photo-1429979787503-f2d7d20550c8?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1443890923422-7819ed4101c0?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1447958374760-1ce70cf11ee3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=ef0b679eb4f3886a72293bdada6098e1"
		}
		],
		artists: [
		{
			name: "John Doe"
		},
		{
			name: "Mike Been"
		},
		{
			name: "Michael Bourgh"
		},
		{
			name: "Nick Save"
		},
		{
			name: "Susanne Feldt"
		}
		]
	},
	{
		id: 2,
		name: "Tall Buildings",
		selected: true,
		description: "Captured between sky high buildings",
		art: [ 
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1423768164017-3f27c066407f?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1422157245273-e08b638b4b00?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1449024540548-94f5d5a59230?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1449024540548-94f5d5a59230?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1449024540548-94f5d5a59230?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1449024540548-94f5d5a59230?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1449024540548-94f5d5a59230?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1449024540548-94f5d5a59230?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1449024540548-94f5d5a59230?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		}
		],
		artists: [
		{
			name: "John Doe"
		},
		{
			name: "Mike Been"
		},
		{
			name: "Michael Bourgh"
		},
		{
			name: "Nick Save"
		},
		{
			name: "Susanne Feldt"
		}
		]
	},
	{
		id: 3,
		name: "Mountains",
		selected: false,
		description: "Gigantic mountains in the view",
		art: [ 
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1443890923422-7819ed4101c0?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1447958374760-1ce70cf11ee3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=ef0b679eb4f3886a72293bdada6098e1"
		},
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1443890923422-7819ed4101c0?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1447958374760-1ce70cf11ee3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=ef0b679eb4f3886a72293bdada6098e1"
		},
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1443890923422-7819ed4101c0?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1447958374760-1ce70cf11ee3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=ef0b679eb4f3886a72293bdada6098e1"
		}
		],
		artists: [
		{
			name: "John Doe"
		},
		{
			name: "Mike Been"
		},
		{
			name: "Michael Bourgh"
		},
		{
			name: "Nick Save"
		},
		{
			name: "Susanne Feldt"
		}
		]
	},
	{
		id: 2,
		name: "Flowers",
		selected: true,
		description: "Lovely flowers in macro shoots for great detail",
		art: [ 
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1429979787503-f2d7d20550c8?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1430933964450-0aefb85717c8?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1436985487860-712a3b558087?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1429979787503-f2d7d20550c8?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1430933964450-0aefb85717c8?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1436985487860-712a3b558087?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1429979787503-f2d7d20550c8?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1430933964450-0aefb85717c8?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		},
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1436985487860-712a3b558087?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"
		}
		],
		artists: [
		{
			name: "John Doe"
		},
		{
			name: "Mike Been"
		},
		{
			name: "Michael Bourgh"
		},
		{
			name: "Nick Save"
		},
		{
			name: "Susanne Feldt"
		}
		]
	}
	];
});