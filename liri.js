var fs = require('fs');
var request = require('request');
var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('spotify');
var OMDB = require('omdb');
var output = " "


//My code
var firstCommand = process.argv[2];
var commandParam = process.argv[3]; 
console.log(keys);
console.log(command);
/*for twitter timeline: 
var my-tweets = {screen_name: user, count: tweet-count};

client.get('statuses/user_timeline', my-tweets, function(error, tweets, response) {
	  if (!error) {
	    console.log(tweets);
	  }
});*/
function liriInfo(command, param){
	switch(cmd){
		case "my-tweets":
		myTweets();
		break;

		case "spotify-this-song":
		spotifyThis(param);
		break;

		case "movie-this":
		movieThis(param);
		break;

		case "do-what-it-says":
		doWhatItSays();
		break;



	}

function myTweets(){
	var twitterUser = new Twitter({
		consumer_key: keys.twitterKeys.consumer_key,
		consumer_secret: keys.twitterKeys.consumer_secret,
		access_token: keys.twitterKeys.access_token_key,
		access_secret: keys.twitterKeys.access_token_secret
	});
	var user = "aficode";
	var tweet_count = 20;
	var my-tweets = {screen_name: user, count: tweet_count};

twitter.client.get('statuses/user_timeline', my-tweets, function(error, tweets, response) {
	  if (!error) {
	  		var data = [];
	  		for (i in tweets){
	  			var data = {
	  				"created" : tweets[i].created_at,
	  				"tweet" : tweets[i].text,
	  			

	  			};
	  			tweet_data.push(data);
	  		}
	    console.log("Aficodes has "  + tweets.length + "tweets. Here they are: " tweets);

	  }

});
/*
function spotifyThis(song){
	var spotify_client  = new Spotify({
		clientID: keys.spotifyKey.client_id,
		consumerSecret: keys.spotifyKey.client_secret
		

	});


spotify_client.searchTracks(song).then(function(res){
	


})

		)
}*/
function thisMovie(movie){
	var query_url = "http://www.omdbapi.com/?i=tt3896198&apikey=4337ad58?t = ' + movie +'&y=&plot=short&tomatoes=true&r=JSON";
		request(query_url, function(error, res, body){
			if(!error && res.statusCode == 200){
				var movie_data = {

					"Title"  					: 	  JSON.parse(body).Title,
					"Year"  					: 	  JSON.parse(body).Year,
					"Languages"  				: 	  JSON.parse(body).Languages,
					"Actors" 	 				: 	  JSON.parse(body).Actors,
					"IMDB Rating" 				: 	  JSON.parse(body).imdbRating,
					"Rotten Tomatoes Rating" 	: 	  JSON.parse(body).tomatoRating,
					"Rotten Tomatoes URL" 		: 	  JSON.parse(body).tomatoURL,
					"Plot"  					: 	  JSON.parse(body).Plot,

				}
				console.log(movie_data);
			}else{
				var query_url = "http://www.omdbapi.com/?i=tt3896198&apikey=4337ad58?t = ' Mr. Nobody '"; 
				request(query_url, function(error, res, body){
		
				var mrNobody_data = {

					"Title"  					: 	  JSON.parse(body).Title,
					"Year"  					: 	  JSON.parse(body).Year,
					"Languages"  				: 	  JSON.parse(body).Languages,
					"Actors" 	 				: 	  JSON.parse(body).Actors,
					"IMDB Rating" 				: 	  JSON.parse(body).imdbRating,
					"Rotten Tomatoes Rating" 	: 	  JSON.parse(body).tomatoRating,
					"Rotten Tomatoes URL" 		: 	  JSON.parse(body).tomatoURL,
					"Plot" 

			}
			console.log(mrNobody_data);
		});
}
console.log(movie_data)