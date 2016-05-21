app.controller('dashboardController', function( $scope, $http, $location, $routeSegment, Page, $uibModal, $q ) {
	$scope.Page = Page;
	$scope.$routeSegment = $routeSegment;

	$scope.highlightedCollection = "";

	$scope.highlightCollection = function(value) {
		$scope.highlightedCollection = value;
	};

	$scope.isHighlightedCollection = function(value) {
		if (angular.isDefined($scope.highlightedCollection)) {
			return $scope.highlightedCollection == value;
		}
		return false;
	};

	$scope.removeCollection = function(displaygroup, $event) {
		$event.stopPropagation();
		
		for (var i = 0; i < $scope.collections.length; i++) {
			if ($scope.collections[i].name == displaygroup.collection) {
				$scope.collections[i].displaygroup = $scope.collections[i].displaygroup.replace(displaygroup.name, ":");
				$scope.collections[i].displaygroup = $scope.collections[i].displaygroup.replace(", :", "");
				$scope.collections[i].displaygroup = $scope.collections[i].displaygroup.replace(":,", "");
				$scope.collections[i].displaygroup = $scope.collections[i].displaygroup.replace(":", "");
				$scope.collections[i].displaygroup = $scope.collections[i].displaygroup.replace(/^ *$/, "");
			}
		}
		displaygroup.collection = "";

	};

	$scope.toggle = function (scope) {
		scope.toggle();
	};

	$scope.remove = function (scope) {
		scope.remove();
	};

	$scope.newDisplay = function (scope) {
		var lastId = $scope.displays[$scope.displays.length - 1].id;
		$scope.displays.push({
			id: lastId + 1,
			name: $scope.newDisplayName,
			location: $scope.newDisplayLocation
		});

		$scope.newDisplayName = "";
		$scope.newDisplayLocation = "";
	};

	$scope.treeOptions = {
		beforeDrop : function(e) {

			for (var i = 0; i < $scope.collections.length; i++) {
				if ($scope.collections[i].name == $scope.displaygroups[e.dest.index].collection) {
					$scope.collections[i].displaygroup = $scope.collections[i].displaygroup.replace($scope.displaygroups[e.dest.index].name, ":");
					$scope.collections[i].displaygroup = $scope.collections[i].displaygroup.replace(", :", "");
					$scope.collections[i].displaygroup = $scope.collections[i].displaygroup.replace(":,", "");
					$scope.collections[i].displaygroup = $scope.collections[i].displaygroup.replace(":", "");

					$scope.collections[i].displaygroup = $scope.collections[i].displaygroup.replace(/^ *$/, "");
				}
			}

			$scope.displaygroups[e.dest.index].collection = $scope.collections[e.source.index].name;
			if ($scope.collections[e.source.index].displaygroup != "") {
				$scope.collections[e.source.index].displaygroup += ", ";
			}
			$scope.collections[e.source.index].displaygroup += $scope.displaygroups[e.dest.index].name;

			return $q.reject();
		}
	};

	function isEmptyOrSpaces(str){
		return str === null || str.match(/^ *$/) !== null;
	}

	$scope.collections = [
	{
		id: 1,
		name: "Nature",
		description: "Some beautiful art pieces of the magnificient nature.",
		selected: false,
		displaygroup: "",
		collage: "assets/img/collage/collage1.jpg",
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
			url: "https://images.unsplash.com/photo-1463123081488-789f998ac9c4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=6d1a6d1c5a7eb63d0c411b1d019f0b30"
		},
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=63abc6240e85e1bfd1c45eb84ba717b8"
		},
		{
			artist: "John Doe",
			url: "https://images.unsplash.com/reserve/JjdWbOCTlemWMuvC0BeF_DSC_0867edit.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=93733799d489cf100ad9b13fa9a25fbf"
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
		displaygroup: "",
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
		name: "Flowers",
		selected: true,
		displaygroup: "",
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

	$scope.displaygroups = [
	{
		id: 1,
		name: "Children Rooms",
		location: "Room 241, Room 211, Room 22",
		collection: "",
		subdisplays: [
		{
			id: 1,
			name: "Kids Display",
			location: "Room 241"
		},
		{
			id: 2,
			name: "Kids Display",
			location: "Room 211"
		},
		{
			id: 3,
			name: "Kids Display",
			location: "Room 22"
		}
		]
	},
	{
		id: 2,
		name: "Fourth Floor",
		location: "Room 422",
		collection: "",
		subdisplays: [
		{
			id: 5,
			name: "Patient Display",
			location: "Room 422"
		}
		]
	},
	{
		id: 3,
		name: "Hallway",
		location: "",
		collection: "",
		subdisplays: []
	},
	];
});