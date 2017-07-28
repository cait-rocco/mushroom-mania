'use strict';

myApp.factory("MushFactory", function($q, $http) {
	function getMushrooms() {
		return $q((resolve, reject) => {
			$http.get('./mushrooms.json')
			.then((mushrooms) => {
				resolve(mushrooms);
			})
			.catch((err) => {
				reject(err);
			});
		});
	}
	return {getMushrooms};
});