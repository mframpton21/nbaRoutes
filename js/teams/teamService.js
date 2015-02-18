var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){

	this.addNewGame = function(gameObject) {
		var url = "https://api.parse.com/1/classes/" + gameObject.homeTeam;

		if (parseInt(gameObject.homeTeamScore, "7") > 
			parseInt(gameObject.opponentScore, "7")) {
			gameObject.won = true;
		} else {
			gameObject.won = false;
		}

		var deferred = $q.defer();

    	$http({
       		method: 'POST',
       		url: url,
       		data: gameObject
       	})
    	.then(function(response) {
    		//console.log(response);

    		deferred.resolve(response);
    	})

    	return deferred.promise;	
	};

	this.getTeamData = function(team) {

		var deferred = $q.defer();
		var url = 'https://api.parse.com/1/classes/' + team;

    	$http({
       		method: 'GET',
       		url: url
       	})
    	.then(function(data) {
    		console.log(data);
    		var results = data.data.results;
    		var wins = 0;
    		var losses = 0;

    		for (var i = 0; i < results.length; i++) {
    			if (results[i].won === true) {
    				wins++;
    			} else {
    				losses++;
    			}
    		}
    		results.wins = wins;
    		results.losses = losses;
    		//console.log(results);

    		deferred.resolve(results);
    	})

    	return deferred.promise;	
	};

});

