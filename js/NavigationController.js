app.controller('NavigationController',['$scope','$location',function($scope,$location){
	
	$scope.load = function (pageToLoad) {
		$location.path('/'+pageToLoad);
	} 
	
}]);