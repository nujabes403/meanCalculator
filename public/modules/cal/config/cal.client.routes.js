'use strict';

//Setting up route
angular.module('cal').config(['$stateProvider',
	function($stateProvider) {
		// Cal state routing
		$stateProvider.
		state('calmain', {
			url: '/cal',
			templateUrl: 'modules/cal/views/calmain.client.view.html'
		});
	}
]);