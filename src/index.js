'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).




  var https = require('https');
  var results = '';
  var personsarray = ['Joe'] || personsarray;
  var options = {
        host: 'bsi7688wf2.execute-api.us-east-1.amazonaws.com',
        path: '/dev/todos',
		    port: 443
	};

var callback = function(response) {

  response.on('data', function (chunk) {
    results += chunk;
  });
  response.on('end', function () {
//    console.log(str,"str");
var str = JSON.parse(results);
var phrases = str.Items;

phrases.forEach(function(item) {
    personsarray.push(item.personsname);
});
	console.log(personsarray,"Persons Drinking")
	});
};
var req = https.request(options, callback).end();









var languageStrings = {
    "en": {
        "translation": {
             "FACTS": [
              "Pineapple Upsidedown cake",
							 "Tequlia",
							 "southern comfort",
							 "Whipped Vodka",
							 "Rum",
							 "Fireball",
							 "Angry Ball",
							 "You pick it asshole",
							 "Vegas Bomb",
							 "JagerBomb",
							 "Moonshine",
							 "Sex on the beach"
            ],
					  "names": personsarray,
					
            "SKILL_NAME" : "Whose Shot, is it anyway?",
            "GET_FACT_MESSAGE" : "",
            "HELP_MESSAGE" : "Help taking a shot who are we Marv?",
            "HELP_REPROMPT" : "Hey everyone !!! Marv needs help",
            "STOP_MESSAGE" : "Stop taking shots? What is it your bedtime? "
        }
    },
    "en-US": {
        "translation": {
           "FACTS": [
              "Pineapple Upsidedown cake",
							 "Tequila",
							 "southern comfort",
							 "Whipped Vodka",
							 "Rum",
							 "Fireball",
							 "Angry Ball",
							 "You pick it asshole",
							 "Vegas Bomb",
							 "JagerBomb",
						 	  "Moonshine",
							 "Sex on the beach"
            ],
						"names": personsarray,
					
            "SKILL_NAME" : "Whose Shot, is it anyway?",
            "GET_FACT_MESSAGE" : "",
            "HELP_MESSAGE" : "Help taking a shot who are we Marv?",
            "HELP_REPROMPT" : "Hey everyone !!! Marv needs help",
            "STOP_MESSAGE" : "Stop taking shots? What is it your bedtime? "
        }
    },
    "en-GB": {
        "translation": {
         						
						"FACTS": [
						//This is where we would would switch up the sayings a little bit based on how brits/americans and other cultures say something a bit different .
               "Pineapple Upsidedown cake",
							 "Tequila",
							 "southern comfort",
							 "Whipped Vodka",
							 "Rum",
							 "Fireball",
							 "Angry Ball",
							 "You pick it asshole",
							 "Vegas Bomb",
							 "JagerBomb",
						 	  "Moonshine",
							 "Sex on the beach"
            ],
					  "names": personsarray,
					
            "SKILL_NAME" : "Whose Shot, is it anyway?",
            "GET_FACT_MESSAGE" : "",
            "HELP_MESSAGE" : "Jon Says to Google it",
            "HELP_REPROMPT" : "Whilst you're waiting for me to help, Google it",
            "STOP_MESSAGE" : "Jon is the DD tonight and has to abstain from farther shots."
        }
    },
 };

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
       
			  var people = this.t("names");
			  var peopleindex = Math.floor(Math.random() * people.length);
			
        var factArr = this.t('FACTS');
			  var factIndex = Math.floor(Math.random() * factArr.length);
			
        var randomFact = people[peopleindex] + '....' + factArr[factIndex];

        // Create speech output
        var speechOutput = this.t("GET_FACT_MESSAGE") + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t("SKILL_NAME"), randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = this.t("HELP_MESSAGE");
        var reprompt = this.t("HELP_MESSAGE");
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    }
};