'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

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
            "GET_SHOT_MESSAGE" : "Who's up next? ....",
            "HELP_MESSAGE" : "Do you really need help getting drunk?, Just say Alexa open wanna get drunk",
            "HELP_REPROMPT" : "Really man? Wow is all i can say. You can say Alexa open wanna get drunk",
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
            "GET_SHOT_MESSAGE" : "Who's up next? ....",
            "HELP_MESSAGE" : "Do you really need help getting drunk?, Just say Alexa open wanna get drunk",
            "HELP_REPROMPT" : "Really man? Wow is all i can say. You can say Alexa open wanna get drunk",
            "STOP_MESSAGE" : "Quiting already?"
        }
    },
    "en-GB": {
        "translation": {
         						
						"SHOTS": [
						//This is where we would would switch up the sayings a little bit based on how brits/americans and other cultures say something a bit different .
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
            "GET_SHOT_MESSAGE" : "Who's up next? ....",
            "HELP_MESSAGE" : "I know your british but come on man it's not that hard. Just say Alexa open wanna get drunk",
            "HELP_REPROMPT" : "Wow .... Just wow that is so lame that you must be Jon",
            "STOP_MESSAGE" : "Jon is lame... but still are you quiting already?"
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
// Once Alexa has been called on asks the question and either starts or stops it or whatever else im gonna decide to do HAHA its my skill
     this.emit(':askWithCard', 'Sure but are sure you want to get drunk?','Sure but are sure you want to get drunk?','Hey are ypu sure you wanna get drunk? and I see you are reading this too So when you want to tell me "Sweet Muffins" for a special suprise');
    },
 // If Yes asks what type of drinking you wanna do ie: shots or beers for now
    'AMAZON.YesIntent': function () {
       this.emit('BeerOrShotsIntent');
    },
   'AMAZON.NoIntent': function () {
       this.emit(':tellWithCard', 'Dont Stop Now');
    },
    'BeerOrShotsIntent': function() {
       this.emit(':askWithCard', 'Are we drinking Shots or Beer?');
     },
     'GetShotsIntent': function() {
      this.emit('GetShots');
    },
     'GetBeersIntent': function() {
        this.emit('GetBeers');
    },  
     'SweetMuffinsIntent': function() {
       this.emit(':askWithCard', 'Are we talking about My sweet muffins from Pennsylvania or from England? Please Say "Pennsylvania" or "England" ');

},
      'GetShots': function () {
       
			  var people = this.t("names");
			  var peopleindex = Math.floor(Math.random() * people.length);
			
        var drinkUp = this.t('SHOTS');
			  var drinkOrder = Math.floor(Math.random() * drinkUp.length);
			
        var randomShot = people[peopleindex] + '   is    with    some    ' + drinkUp[drinkOrder];
          // added '....' to give it a pause in between words in each array


        // Create speech output
        var speechOutput = this.t("GET_SHOT_MESSAGE") + randomShot;
        this.emit(':tellWithCard', speechOutput, this.t("SKILL_NAME"), randomShot);
    },
       'GetBeers': function () {
       
			  var people = this.t("names");
			  var peopleindex = Math.floor(Math.random() * people.length);
			
        var drinkUp = this.t('BEERS');
			  var drinkOrder = Math.floor(Math.random() * drinkUp.length);
			
        var randomBeer = people[peopleindex] + '   is     with     some    ' + drinkUp[drinkOrder];
          // added '....' to give it a pause in between words in each array


        // Create speech output
        var speechOutput = this.t("GET_SHOT_MESSAGE") + randomBeer;
        this.emit(':tellWithCard', speechOutput, this.t("SKILL_NAME"), randomBeer);
    },
    
    'AMAZON.HelpIntent': function() {
        var speechOutput = this.t("HELP_MESSAGE");
        var reprompt = this.t("HELP_MESSAGE");
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function() {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'AMAZON.StopIntent': function() {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },

};
