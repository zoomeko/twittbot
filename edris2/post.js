console.log("follow bot is starting now");
var Twit = require('twit');
var config = require('./config');
//console.log(config);
var T = new Twit(config);

var stream = T.stream('user');
stream.on('tweet', tweetEvent);
console.log("follower event");
function tweetEvent(eventMsg) {

    var replyto = eventMsg.in_reply_to_screen_name;
    var text = eventMsg.text;
    var from = eventMsg.user.screen_name;
    if (replyto === 'EdoZoom'){
        var newtweet = '@' + from + ' i appriciate for ur tweet';
        tweetIt(newtweet);
    }
}

function tweetIt(txt) {
    var tweet = {
        status: txt
    };
    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response) {
        if (err) {
            console.log('you made wrong tweet');
        }
        else {

            console.log("your tweet is good now");

        }

    }
}
