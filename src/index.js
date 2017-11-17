'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = 'amzn1.ask.skill.cea43b8e-6d61-4fe6-a54b-fbcdce86a85f';  // TODO replace with your app ID (OPTIONAL).

    var https = require('https');
  var results = '';
  var personsarray = ['Free Pass'] || personsarray;
  var shotsarray = ['Free Pass'] || shotsarray;
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
var phrases = str;

phrases.forEach(function(item) {
	if (item.personsname !== null ) {
    personsarray.push(item.personsname);
	}
if (item.shotname !== null ) {
console.log(item.shotname);
    shotsarray.push(item.shotname);
	}
})

	console.log(personsarray,"Persons Drinking")
	console.log(shotsarray,"Persons Drinking these shots")
	});
};
var req = https.request(options, callback).end();

var languageStrings = {
    "en": {
        "translation": {
             "shots": shotsarray,
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
           "shots": shotsarray,
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
         						
						"shots": shotsarray,
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
    alexa.appId=APP_ID;
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
			
        var factArr = this.t('shots');
			  var factIndex = Math.floor(Math.random() * factArr.length);
			
        var randomFact = people[peopleindex] + '....' + factArr[factIndex];

        // Create speech output
        var speechOutput = this.t("GET_FACT_MESSAGE") + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t("SKILL_NAME"), randomFact);
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
