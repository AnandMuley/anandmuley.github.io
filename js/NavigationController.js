app.controller('NavigationController',['$scope','$location',function($scope,$location){
	
	$scope.loadNext = function(currentPage){
		switch (currentPage) {
		case 'Home':
			$location.path('education');
			break;

		default:
			break;
		}
	}
	
	$scope.loadPrevious = function(currentPage){
		switch (currentPage) {
		case 'Education':
			$location.path('/home');
			break;

		default:
			break;
		}
	} 
	
}]);