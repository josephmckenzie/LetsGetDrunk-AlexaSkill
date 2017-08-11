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
            "STOP_MESSAGE" : "Quiting already? Are you sure you want to quit?"
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
            "STOP_MESSAGE" : "Quiting already? Are you sure you want to quit?"
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
var attrArray = [];
var attributes ;
var name = "name";
var sessionSpot;
var speechResponse;
var speechReprompt;
var handlers = {
 
    'LaunchRequest': function () {
//       console.log("Initial App launched,Alexa Asks: Can you handle Alexa?");
      sessionSpot = 'Initial App launched, Alexa Asks: Can you handle Alexa?';
      attributes = {} ;
      attributes[name] = sessionSpot;
      attrArray.push(attributes);
      speechResponse = 'Sure, but do you really think that you can handle Alexa?';
      speechReprompt = "How on earth do you need a reprompt message for the intital launch of me?";
      console.log(attributes,"Attributes Hash for this session");
      console.log(attrArray,"Attributes Array of hashes");
      
     this.emit(':ask', speechResponse,speechReprompt,attributes);
    },
    
    'Unhandled': function() {
       //console.log("Unhandled Intent");
      sessionSpot = 'Unhandled Intent';
      attributes = {} ;
      attributes[name] = sessionSpot;
      attrArray.push(attributes);
      console.log(attributes,"Attributes Hash for this session");
      console.log(attrArray,"Attributes Array of hashes");
      
      this.emit(':ask', 'What did you say? Are you drunk?', "I'll say it slower please repeat your self!");
    },
 
    'AMAZON.YesIntent': function () {
     //console.log("Alexa Asked: Can you handle Alexa?, Response: Yes");
     attributes = {} ;
     sessionSpot = "Alexa Asked: Can you handle Alexa?, Response: Yes";
//     var yesCount = 1 || yesCount;
     attributes[name] = sessionSpot;
     attrArray.push(attributes);
     speechResponse ='Awesome, are we drinking Shots or Beer?';
     speechReprompt = "Ok I'll ask you once more would you prefer to have spme Shots or Beers?";
      console.log(attributes,"Attributes Hash for this session");
      console.log(attrArray,"Attributes Array of hashes");
     this.emit(':ask',speechResponse ,speechReprompt, attributes);
    },
 
    'AMAZON.NoIntent': function () {
      //console.log("Alexa Asked: Can you handle Alexa?, Response: No");
     sessionSpot = "Alexa Asked: Can you handle Alexa?, Response: No";
     attributes = {} ;
     attributes[name] = sessionSpot;
     attrArray.push(attributes);
     speechResponse ='Well, ok I guess If you know a secret phrase or key word tell me now, or try and tell me to stop. Go ahead try it I dare you to. If want to have some drinks just tell me drinks';
     speechReprompt = "Are you really sure you don't want to drink? Ok, well either tell me to cancel or quit or maybe you can do something else prehaps?";
      console.log(attributes,"Attributes Hash for this session");
      console.log(attrArray,"Attributes Array of hashes");

     this.emit(':ask',speechResponse ,speechReprompt, attributes);
    },

    'AMAZON.HelpIntent': function() {
      //console.log("You must be drunk, You asked for help from Alexa?!?");
     sessionSpot = "You must be drunk, You asked for help from Alexa?!?";
     attributes = {} ;
     attributes[name] = sessionSpot;
     attrArray.push(attributes);
     var speechOutput = this.t("HELP_MESSAGE");
     var reprompt = this.t("HELP_REPROMPT");
      console.log(attributes,"Attributes Hash for this session");
      console.log(attrArray,"Attributes Array of hashes");
     this.emit(':ask', speechOutput, reprompt,attributes);
      },

    'AMAZON.CancelIntent': function() {
          //console.log("Cancel Intent");
     sessionSpot = "Cancel Intent. Why oh why?";
     attributes = {} ;
     attributes[name] = sessionSpot;
     attrArray.push(attributes);
     console.log(attributes,"Attributes Hash for this session");
     console.log(attrArray,"Attributes Array of hashes");
     this.emit(':tell', "Well Goodbye then and have a wonderful day. You asshole");
     },

    'AMAZON.StopIntent': function() {
          //console.log("Stop Intent");
     sessionSpot = "Stop Intent. You're gonna stop now?";
     attributes = {} ;
     attributes[name] = sessionSpot;
     attrArray.push(attributes);
     console.log(attributes,"Attributes Hash for this session");
     console.log(attrArray,"Attributes Array of hashes");
      
         this.emit(':tell', this.t("STOP_MESSAGE"));
     },
 
    'BeerOrShotsIntent': function() {
              //console.log("Shots or Beer Intent");
     sessionSpot = "Alexa Asked Can You hang?: User responded Hell yes!, Alexa is now waiting for a response : Beers or Shots?";
     attributes = {} ;
     attributes[name] = sessionSpot;
     attrArray.push(attributes);
     console.log(attributes,"Attributes Hash for this session");
     console.log(attrArray,"Attributes Array of hashes");
     this.emit(':ask', 'Are we drinking Shots or Beer?', 'Are we drinking Shots or Beer?');
     },
 
    'GetShotsIntent': function() {
     sessionSpot = "Alexa Asked Shots or beer?: The user decides on: Shots";
     attributes = {} ;
     attributes[name] = sessionSpot;
     attrArray.push(attributes);
     console.log(attributes,"Attributes Hash for this session");
     console.log(attrArray,"Attributes Array of hashes"); 
     //call the GetDrinks intent passing it an agurment for the type of drink the user chose.
     //notice we are not saying ask or tell but rather calling the intent we want
     this.emit('GetDrinks',"SHOTS");
    },
 
    'GetBeersIntent': function() {
     sessionSpot = "Alexa Asked Shots or beer?: The user responded with : Beers";
     attributes = {} ;
     attributes[name] = sessionSpot;
     attrArray.push(attributes);
     console.log(attributes,"Attributes Hash for this session");
     console.log(attrArray,"Attributes Array of hashes"); 
     //call the GetDrinks intent passing it an agurment for the type of drink the user chose.
    //notice we are not saying ask or tell but rather calling the intent we want.
     this.emit('GetDrinks',"BEERS");
    },  
 
    'SweetMuffinsIntent': function() {
       // If youave come across this intent then you are pretty cool.
      //console.log("SweetMuffins Intent");
     sessionSpot = "You have came across Sweetmuffins, Alexa asks: Which Sweetmufffins?";
     attributes = {} ;
     attributes[name] = sessionSpot;
     attrArray.push(attributes);
     console.log(attributes,"Attributes Hash for this session");
     console.log(attrArray,"Attributes Array of hashes");  
       this.emit(':ask', 'Are we talking about My sweet muffins from Pennsylvania or from England?');
    },
 
    'DebbieIntent': function() {
      // Debbie has been chosen that is pretty cool ;D
     //console.log("Debbies Intent or my Intent with her?");
     sessionSpot = "Alexa aske: Which Sweetmufffins?, User Responded: Debbie/Pennslyvania";
     attributes = {} ;
     attributes[name] = sessionSpot;
     attrArray.push(attributes);
     console.log(attributes,"Attributes Hash for this session");
     console.log(attrArray,"Attributes Array of hashes");  
        this.emit(':ask', 'Woohoo DEBBIE? Im celebrating tonight!! How are you doing tonight debbie?');
    },
    
    'GoodIntent': function() {
          // Debbie has been chosen that is pretty cool ;D
         //console.log("Debbies Intent or my Intent with her?");
        this.emit(':ask', 'Good to hear, So would you do me a favor and say man buns? If you dont want to just say Pass.');
    },
 
    'JonsMomIntent': function() {
         //console.log("Jons Mom");
        this.emit(':tell', 'Jons mom may be far in distance but not in heart ');
    },
 
    'GetDrinks': function(type) {
        var shotsTaken = 1 || shotsTaken; 
        shotsTaken += 1;
			  var people = this.t("names");
			  var peopleindex = Math.floor(Math.random() * people.length);
        var shotsTookBy = peopleindex + "has taken" + shotsTaken + "shots";
        var somoneElse = "Would someone else like one?";
        var drinkUp = this.t(type);
			  var drinkOrder = Math.floor(Math.random() * drinkUp.length);
        var randomDrinkType = people[peopleindex] + ' is with some ' + drinkUp[drinkOrder];
        var speechOutput = this.t("upNext") + randomDrinkType + shotsTookBy + somoneElse;
     console.log(shotsTaken);
        this.emit(':ask', speechOutput, speechOutput, speechOutput);
    }
};

exports.handler = function(event, context,callback) {
    var alexa = Alexa.handler(event, context,callback);
    alexa.appId = APP_ID;
    alexa.attributes = attributes;
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};