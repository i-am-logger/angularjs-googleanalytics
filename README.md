# Tracking Google Analytics Page Views with Angular.js

## How?

follow these step:

- Create angular constant GOOGLE_ACCOUNT with your google account id (http://docs.angularjs.org/api/auto/object/$provide#constant)
- Add the service to your angular js app module:

	``var app = angular.module('myapp', ['analytics']) {
		...
	});``


- Now just have analytics to be injected in your contorller.

	``function myCtrl($rootScope, $scope, $http, analytics) {
	    ...
	};``

Code licensed under The MIT License. 
