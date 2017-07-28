'use strict';

myApp.controller("mushCtrl", function($scope, MushFactory) {
	MushFactory.getMushrooms()
	.then((mushroomData) => {
		$scope.mushArr = [];
		$scope.mushroomList = mushroomData.data.mushrooms;
		angular.forEach($scope.mushroomList, function(mush) {
			$scope.mushArr.push(mush);
		});
	});
});