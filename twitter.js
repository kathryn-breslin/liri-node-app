
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
