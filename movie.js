
var request = require("request");
//var liriBase = require("./liri.js");
 //var movieName = process.argv[3];
// console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
// console.log(process.argv);
// console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
// console.log("");

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
      //console.log("The movie was rated ", parsedBodyData.Ratings[1].Value + " by " + JSON.parse(body).Ratings[1].Source); //this works sometimes, and other times it doesn't...
        console.log("");
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
