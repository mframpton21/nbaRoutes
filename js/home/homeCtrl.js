var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function($scope, homeService, teamsData){

	$scope.jazzData = teamsData['utahjazz'];
	$scope.lakerData = teamsData['losangeleslakers'];
	$scope.heatData = teamsData['miamiheat'];

});