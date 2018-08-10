

require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs"); //connect random.txt for 'spotify this song'
//var liri = require("./liri.js");
var Spotify = require("node-spotify-api");

var spotify = new Spotify (keys.spotify);

 spotifySearch = function(concatSearchTitle) {

    if (process.argv[2] === "do-what-it-says"){
        fs.readFile("random.txt", "utf8", function(error, data) {
            if(error) {
                return console.log(error);
            }
            console.log(data);

            spotify.search ({
                type: "track",
                query: data
            },
        function(error, data) {
            if(error) {
                return console.log("Error occurred: " + error);
            }
            console.log("");
            console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++");
            console.log("");
            console.log("Song Name: ",data.tracks.items[0].name);
            console.log("Album Name: ",data.tracks.items[0].album.name);
            console.log("Artist Name: ",data.tracks.items[0].artists[0].name);
            console.log("Preview of Song: ",data.tracks.items[0].preview_url);
            console.log("");
            console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++");
            console.log("");
        });
    })
}

    else if (!concatSearchTitle) {
        spotify.search ({
            type: "artist",
            query:"Ace of Base"
        }, 
    function(error, data) {

        if(error) {
            return console.log('Error occurred: ' + error);
        }
            //console.log(data.artists.items);
            console.log("");
            console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++");
            console.log("");
            console.log("Artist Name: ",data.artists.items[0].name);
            // console.log("Album Name: ",data.tracks.items[0].album.name);
            // console.log("Artist Name: ",data.tracks.items[0].artists[0].name);
             console.log("Preview of Artist: ",data.artists.items[0].external_urls.spotify);
            console.log("");
            console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++");
            console.log("");
        })
    }
    else {
       spotify.search ({
        type: "track",
        query: concatSearchTitle
    },
    function(error, data) {
        
        if(error) {
            return console.log('Error occurred: ' + error);
        }
            console.log("");
            console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++");
            console.log("");
            console.log("Song Name: ",data.tracks.items[0].name);
            console.log("Album Name: ",data.tracks.items[0].album.name);
            console.log("Artist Name: ",data.tracks.items[0].artists[0].name);
            console.log("Preview of Song: ",data.tracks.items[0].preview_url);
            console.log("");
            console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++");
            console.log("");
            
        });
    } 
}

var concatSongSearch = function() {
    var userSearch = process.argv; 
    var userSearchLength = process.argv.length;
    var concatSearchTitle = "";
  
  if (userSearchLength < 10) {
        // console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
        // console.log("Individual title words", userSearch);
        // console.log("");

      for (var i = 2; i < process.argv.length; i++){
          if(i !=2 ) {
              concatSearchTitle += "+" + userSearch[i];
            }
          else {
              concatSearchTitle += userSearch[i];
          }
      }
  }   
  
    // console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
    // console.log("");
    // console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
    // console.log("");
    // console.log("Concatenated Search Title");
    // console.log("The search is, ",concatSearchTitle);
    // console.log("");
    // console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
    spotifySearch(concatSearchTitle);
}

concatSongSearch();
