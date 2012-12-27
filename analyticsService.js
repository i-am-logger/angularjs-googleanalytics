
var _gaq = _gaq || [];

angular.module('analytics', []).run(['$http', function($http) {

	_gaq.push(['_setAccount', 'YOUR GOOGLE ACCOUNT']);
	_gaq.push(['_trackPageview']);

	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);

}]).service('analytics', function($rootScope, $window, $location) {
	var track = function() {
		$window._gaq.push(['_trackPageview', $location.path()]);
	};
	$rootScope.$on('$viewContentLoaded', track);
});