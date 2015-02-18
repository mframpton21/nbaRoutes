var app = angular.module('nbaRoutes');

app.service('homeService', function($http, $q, teamService){
	
	this.getTeamsData = function(){
		var teamsData = {};
    	var deferred = $q.defer();
    	var promise1 = teamService.getTeamData('utahjazz');
    	var promise2 = teamService.getTeamData('losangeleslakers');
    	var promise3 = teamService.getTeamData('miamiheat');

    	$q.all([promise1, promise2, promise3])
    	.then(function(data){
    		//console.log(data);
    		teamsData.utahjazz = data[0];
			teamsData.losangeleslakers = data[1];
			teamsData.miamiheat = data[2];

			deferred.resolve(teamsData);
		});
		return deferred.promise;
  	}
});