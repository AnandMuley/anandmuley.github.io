var app = angular.module('ABM',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		templateUrl : 'views/Home.html'
	}).when('/home',{
		templateUrl : 'views/Home.html'
	}).when('/education',{
		templateUrl : 'views/Education.html'
	});
}]);