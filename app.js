'use strict';

const myApp = angular.module('app', ['ngRoute']);

myApp.config(($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: 'mushroom-list.html',
		controller: 'mushCtrl'
	});
});