//require('dotenv').config();
'use strict'

/* jslint node: true */
/* jshint esnext: true */
/* eslint-env es6 */
// import chai from "chai"
var mocha = require('mocha');
var Alexa = require('/usr/local/lib/node_modules/alexa-sdk');


//  var  mockResponse = require('gamePlay.json');
var gamePlay = require('./gamePlay.json');


var APP_ID =  'amzn1.ask.skill.0bd86f38-a7ef-42b1-9a4f-93e1acc4f04c';



var languageStrings = {
    "en": {
        "translation": {
             "SHOTS": [
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
           "BEERS":[
                "Budweiser",
                "Bud-Light",
                "Miller",
                "Yuengling",
                "Redds Apple Ale",
                "Jons British Ale",
                "Four LOKO" 
            ],
         
					"people": [
						"Joe",
           "Eddie"
//						"Marv",
//						"Jen",
//						"Heather",
//						"Josh",
//						"Aaron",
//						"Jon",
//						"Amanda"
					],
            "SKILL_NAME" : "Shots in English",
            "upNext" : "Who's up next? ....",
            "HELP_MESSAGE" : "Do you really need help getting drunk?, Just say Alexa open wanna get drunk",
            "HELP_REPROMPT" : "Really man? Wow is all Ican say. You can say Alexa open wanna get drunk",
            "STOP_MESSAGE" : "Quiting already?"
        }
    },
    "en-US": {
        "translation": {
           "SHOTS": [
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
         "BEERS":[
                "Budweiser",
                "Bud-Light",
                "Miller",
                "Yuengling",
                "Redds Apple Ale",
                "Jons British Ale",
                "Pabst blue ribbon " 
            ],
						"names": [
						"Joe",
             "Eddie"
//						"Marv",
//						"Jen",
//						"Heather",
//						"Josh",
//						"Aaron",
//						"Jon",
//						"Amanda"
							],
					
            "SKILL_NAME" : "Shots in en-us",
            "upNext" : "Who's up next? ....",
            "HELP_MESSAGE" : "Do you really need help getting drunk?, Just say Alexa open wanna get drunk",
            "HELP_REPROMPT" : "Really man? Wow is all I can say. You can say Alexa open wanna get drunk",
            "STOP_MESSAGE" : "Quiting already?"
        }
    },
    "en-GB": {
        "translation": {
         						
						"SHOTS": [
						//This is where we would switch up the sayings a little bit based on how brits/americans and other cultures say something a bit different .
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
         "BEERS":[
                "Budweiser",
                "Bud-Light",
                "Miller",
                "Yuengling",
                "Redds Apple Ale",
                "Jons British Ale",
                "Some Kind of IPA" 
            ],
					"names": [
						"Joe",
						"Marv",
						"Jen",
						"Heather",
						"Josh",
						"Aaron",
						"Jon",
						"Amanda"
							],
            "SKILL_NAME" : "Jons British Shot Game",
            "upNext" : "Who's up next? ....",
            "HELP_MESSAGE" : "I know your british but come on man it's not that hard. Just say Alexa open wanna get drunk",
            "HELP_REPROMPT" : "Wow .... Just wow that is so lame that you must be Jon",
            "STOP_MESSAGE" : "Jon is lame... but still are you quitting already?"
        }
    },
 };

var attributes;
var session;
var speechResponse = '';
var handlers = {
    'LaunchRequest': function () {
     console.log("Skill Has been launched");
//     console.log(gamePlay);

// Once Alexa has been called on asks the question and either starts or stops it or whatever else im gonna decide to do HAHA its my skill
     var sure = 'Ok sure thing, but do you think that you can handle Alexa in drinking contest?';
     attributes = {"name":'Initial Launch of App'};

     
     this.emit(':ask', sure,sure,session,attributes);
    },
 
 // If Yes asks what type of drinking you wanna do ie: shots or beers for now
    'AMAZON.YesIntent': function () {
     console.log("Yes Intent");
//     var handleIt = "I can handle Alexa";
//     var nameValue = JSON.stringify(this.attributes.name);
//     var attributesHash = JSON.parse(nameValue);
//     console.log(attributesHash,handleIt);
       this.emit(':ask', 'Sure thing, but are you sure you can hang this time?', 'Sure thing, but are you sure you can hang this time?', session);
    
    },
   'AMAZON.NoIntent': function () {
       console.log("No Intent");
       this.emit(':tell', 'Dont Stop Now');
    },
    'BeerOrShotsIntent': function() {
             console.log("Shots or Beer Intent");
    
     
       this.emit(':ask', 'Are we drinking Shots or Beer?', 'Are we drinking Shots or Beer?', session);
     },
     'GetShotsIntent': function() {
       console.log("Shots Intent");
       this.emit('GetDrinks',"SHOTS");
    },
     'GetBeersIntent': function() {
       console.log("Beers Intent");
       this.emit('GetDrinks',"BEERS");
    },  
     'SweetMuffinsIntent': function() {
       // If youave come across this intent then you are pretty cool.
       console.log("SweetMuffins Intent");
       this.emit(':ask', 'Are we talking about My sweet muffins from Pennsylvania or from England?');
    },
      'PennsylvaniaIntent': function() {
          // Debbie has been chosen that is pretty cool ;D
        console.log("Debbies Intent or my Intent with her?");
        this.emit(':tell', 'DEBBIE? Im celebrating tonight!!');
    },
      'EnglandIntent': function() {
        console.log("Jons Mom");
        this.emit(':tell', 'Jons mom may be far in distance but not in heart ');
    },
  'AMAZON.HelpIntent': function() {
        console.log("Help Intent");
        var speechOutput = this.t("HELP_MESSAGE");
        var reprompt = this.t("HELP_MESSAGE");
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function() {
        console.log("Cancel Intent");
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'AMAZON.StopIntent': function() {
        console.log("Stop Intent");
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
// 'Unhandled' event in stateless handler
    'Unhandled': function() {
        console.log("Unhandled Intent");
        this.emit(':ask', 'I didnt understand you. What did you say?', 'What did you say?');
},
 
    'GetDrinks': function(type) {
      
			  var people = this.t("names");
			  var peopleindex = Math.floor(Math.random() * people.length);
        var drinkUp = this.t(type);
			  var drinkOrder = Math.floor(Math.random() * drinkUp.length);
        var randomDrinkType = people[peopleindex] + ' is with some ' + drinkUp[drinkOrder];
        var speechOutput = this.t("upNext") + randomDrinkType;
        this.emit(':ask', speechOutput, speechOutput, speechOutput);
    }
   
};

exports.handler = function(event, context,callback) {
    var alexa = Alexa.handler(event, context,callback);
    alexa.appId = APP_ID;
    alexa.session = session;
    alexa.attributes = attributes;
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};