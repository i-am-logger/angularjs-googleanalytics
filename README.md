# Tracking Google Analytics Page Views with Angular.js

## How?

follow these step:

- Add the service to your angular js app module:

	``var app = angular.module('myapp', ['analytics']) {
		...
	});``

-  Set your analytics code:

    ``app.constant('gaKey', 'UA-XXXXXXXX-Y');``


Code licensed under The MIT License. 
