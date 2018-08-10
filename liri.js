// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////
// /// OMDB /////////////////////////////////////////////////////////////////


var action = process.argv[2];
    
    switch (action) {
    case "movie-this":

    var request = require("request");
    var getMovieDetails = function (concatMovieTitle) {
    

    if (!concatMovieTitle) {
       var movieRequest = "Mr.+Nobody"
            var secondQueryURL = "http://www.omdbapi.com/?t=" + movieRequest + "&y=&plot=short&apikey=trilogy";
            request(secondQueryURL, function(error, response, body) {
                if(error) {
                    console.log(error)
                }
                if(!error && response.statusCode === 200){
                    var parsedBodyData = JSON.parse(body);
                    
            console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
            console.log("");
            console.log("You didn't search for a movie, so here is one we think is awesome!")
            console.log("");
            console.log("The movie's Title is: " + JSON.parse(body).Title);
            console.log("");
            console.log("The movie was released in: ", parsedBodyData.Year);
            console.log("");
            console.log("The movie's IMDB rating is: ", parsedBodyData.imdbRating);
            console.log("");
            // console.log("The movie was rated ", parsedBodyData.Ratings[1].Value + " by " + JSON.parse(body).Ratings[1].Source);
            console.log("");
            console.log("The movie was produced in: ", parsedBodyData.Country);
            console.log("");
            console.log("The movie is spoken in: ", parsedBodyData.Language);
            console.log("");
            console.log("The plot of the movie is: ", parsedBodyData.Plot);
            console.log("");
            console.log("The actors in the movie include: ", parsedBodyData.Actors);
            console.log("");
            console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
                }
            })
    }
    else {
        var queryURL = "http://www.omdbapi.com/?t=" + concatMovieTitle + "&y=&plot=short&apikey=trilogy";

        request(queryURL, function(error, response, body){

        if (error) {
            console.log(error)
        }

        if (!error && response.statusCode === 200){
            var parsedBodyData = JSON.parse(body);
            
            console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
            console.log("");
            console.log("The movie's Title is: " + JSON.parse(body).Title);
            console.log("");
            console.log("The movie was released in: ", parsedBodyData.Year);
            console.log("");
            console.log("The movie's IMDB rating is: ", parsedBodyData.imdbRating);
            console.log("");
            // console.log("The movie was rated ", parsedBodyData.Ratings[1].Value + " by " + JSON.parse(body).Ratings[1].Source); //this works sometimes, and other times it doesn't...
            console.log("");
            console.log("The movie was produced in: ", parsedBodyData.Country);
            console.log("");
            console.log("The movie is spoken in: ", parsedBodyData.Language);
            console.log("");
            console.log("The plot of the movie is: ", parsedBodyData.Plot);
            console.log("");
            console.log("The actors in the movie include: ", parsedBodyData.Actors);
            console.log("");
            console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
            
            }
        });
    }; 
}

    var concatMovieTitle = function() {

    var argv = process.argv;
    var argvLength = process.argv.length;
    var concatMovieTitle = "";

    if (argvLength < 10) {
        // console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
        // console.log("Individual movie title words");
        // console.log("");

        for (var i = 2; i < process.argv.length; i++){
        //console.log(argv[i]);

        if (i != 2) {
            concatMovieTitle += "+" + argv[i];
            }
        else {
            concatMovieTitle += argv[i];
        }
    }
}

    // console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
    // console.log("");
    // console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
    // console.log("");
    // console.log("Concatenated Movie Title");
    // console.log("The movie Title is, ",concatMovieTitle);
    // console.log("");
    // console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
    getMovieDetails(concatMovieTitle);
}

concatMovieTitle();
    
break;

// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////
// /// SPOTIFY //////////////////////////////////////////////////////////////

case "spotify-this":

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
break;

// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////
// /// TWITTER //////////////////////////////////////////////////////////////

case "my-tweets":
var passCodes = require("dotenv").config();
var keys = require("./keys.js");
//var liriBase = require("./liri.js");
var Twitter= require("twitter");

function getTweets() {
  var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });
    //var getTweets = function() {

 var twitterParams = {
  q: 'kathryn_breslin',
     count: 10, 
     result_type: 'recent',
     lang: 'en'
 }
    // var twitterURL = "https://api.twitter.com/1.1/statuses/user_timeline.json?" + twitterAccount + "&count=14";
    // console.log(twitterURL);

    client.get('https://api.twitter.com/1.1/statuses/user_timeline.json?' + twitterParams, 
     function (error, tweets, response){
       if (error) throw error;
       console.log("");
       console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++");
       console.log("");
       console.log("");
       console.log(tweets[0].text);
       console.log("");
       console.log("");
       console.log(tweets[1].text);
       console.log("");
       console.log("");
       console.log(tweets[2].text);
       console.log("");
       console.log("");
       console.log(tweets[3].text);
       console.log("");
       console.log("");
       console.log(tweets[4].text);
       console.log("");
       console.log("");
       console.log(tweets[5].text);
       console.log("");
       console.log("");
       console.log(tweets[6].text);
       console.log("");
       console.log("");
       console.log(tweets[7].text);
       console.log("");
       console.log("");
       console.log(tweets[8].text);
       console.log("");
       console.log("");
       console.log(tweets[9].text);
       console.log("");
       console.log("");
       console.log(tweets[10].text);
       console.log("");
       console.log("");
       console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++");
       //console.log(response);
       });  
}
 getTweets();
 break;

};