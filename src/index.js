'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

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
					"people": [
						"Joe",
						"Marv",
						"Jen",
						"Heather",
						"Josh",
						"Aaron",
						"Jon",
						"Amanda",
						"Mike",
						"Susan",
						"Don",
						"Jake",
						"Jeremy",
						"Cyndi"
					],
            "SKILL_NAME" : "Shots in English",
            "GET_FACT_MESSAGE" : "",
            "HELP_MESSAGE" : "Do you really need help taking a shot?",
            "HELP_REPROMPT" : "A Help Reprompt message",
            "STOP_MESSAGE" : "Please dont't stop the party"
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
						"names": [
						"Joe",
						"Marv",
						"Jen",
						"Heather",
						"Josh",
						"Aaron",
						"Jon",
						"Amanda",
						"Mike",
						"Susan",
						"Don",
						"Jake",
						"Jeremy",
						"Cyndi"
							],
					
            "SKILL_NAME" : "Shots in en-us",
            "GET_FACT_MESSAGE" : "",
            "HELP_MESSAGE" : "Help taking a shot who are marv?",
            "HELP_REPROMPT" : "A Help Reprompt message",
            "STOP_MESSAGE" : "What to say if someone tells Alexa to STOP!"
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
					"names": [
						"Joe",
						"Marv",
						"Jen",
						"Heather",
						"Josh",
						"Aaron",
						"Jon",
						"Amanda",
						"Mike",
						"Susan",
						"Don",
						"Jake",
						"Jeremy",
						"Cyndi"
							],
            "SKILL_NAME" : "Jon takes shots Yea",
            "GET_FACT_MESSAGE" : "",
            "HELP_MESSAGE" : "What to say to tell someone what to do if they ask for HELP",
            "HELP_REPROMPT" : "A Help Reprompt message",
            "STOP_MESSAGE" : "Jon punks out"
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