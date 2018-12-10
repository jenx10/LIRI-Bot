require("dotenv").config();

var Spotify = require('node-spotify-api');
var axios = require("axios");
var moment = require("moment");

var keys = require("./keys");
console.log(keys.spotify)

var spotify = new Spotify(keys.spotify)

var userChoice = process.argv[2];


switch (userChoice) {
    case "concert-this":
        Console.log("concert");
        break;
    case "spotify-this-song":
        console.log("spotify");
        break;
    case "movie-this":
        console.log("movie");
        break;
    case "do-what-it-says":
        console.log("whatever");
        break;

    default:
    console.log("please enter something")
        break;
}


function spotifyThis(song){

	if(song === ""){
		song = "better";
	}

	spotify.search({ type: 'track', query: song}, function(err, data) {
    if (err) {
        console.log('Error occurred: ' + err);
        return;
    }

    var song = data.tracks.items[0];
    console.log("------Artists-----");
    for(i=0; i<song.artists.length; i++){
    	console.log(song.artists[i].name);
    }

    console.log("------Song Name-----");
    console.log(song.name);

	console.log("-------Preview Link-----");
    console.log(song.preview_url);

    console.log("-------Album-----");
    console.log(song.album.name);

	});

}