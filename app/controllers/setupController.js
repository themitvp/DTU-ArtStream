app.controller('setupController', function( $scope, $http, $location, $routeSegment, Page, $uibModal ) {
	$scope.Page = Page;
	$scope.$routeSegment = $routeSegment;
	

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

	$scope.displays = [
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
	},
	{
		id: 4,
		name: "Patient Display",
		location: "Room 122"
	},
	{
		id: 5,
		name: "Patient Display",
		location: "Room 422"
	},
	]; 

	$scope.displaygroups = [
	{
		id: 1,
		name: "Children Rooms",
		location: "Room 241, Room 211, Room 22",
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
		subdisplays: []
	},
	];
});