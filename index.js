'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

var languageStrings = {
    "en": {
        "translation": {
             "SHOTS": [
              "Drink up",
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
                "Drink up",
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
						"Marv",
						"Jen",
						"Heather",
						"Josh",
						"Aaron",
						"Jon",
						"Amanda"
					],
            "SKILL_NAME" : "Shots in English",
            "GET_SHOT_MESSAGE" : "Who's up next? ....",
            "HELP_MESSAGE" : "Do you really need help taking a shot?, Just say Alexa open take a shot",
            "HELP_REPROMPT" : "Really man? Wow is all i can say. You can say Alexa open take a shot",
            "STOP_MESSAGE" : "Quiting already?"
        }
    },
    "en-US": {
        "translation": {
           "SHOTS": [
              "Drink up",
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
                "Drink up",
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
						"Marv",
						"Jen",
						"Heather",
						"Josh",
						"Aaron",
						"Jon",
						"Amanda"
							],
					
            "SKILL_NAME" : "Shots in en-us",
            "GET_SHOT_MESSAGE" : "Who's up next? ....",
            "HELP_MESSAGE" : "Do you really need help taking a shot?, Just say Alexa open take a shot",
            "HELP_REPROMPT" : "Really man? Wow is all i can say. You can say Alexa open take a shot",
            "STOP_MESSAGE" : "Quiting already?"
        }
    },
    "en-GB": {
        "translation": {
         						
						"SHOTS": [
						//This is where we would would switch up the sayings a little bit based on how brits/americans and other cultures say something a bit different .
               "Drink up",
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
                "Drink up",
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
            "HELP_MESSAGE" : "I know your british but come on man it's not that hard. Just say Alexa open take a shot",
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
//       var myName = this.event.request.intent.slots.Beer.value;
      this.emit(':ask', 'Wanna get drunk?');
    },
    'AMAZON.YesIntent': function () {
       this.emit('BeerOrShotsIntent');
    },
    'BeerOrShotsIntent': function() {
       this.emit(':ask', 'Are we drinking Shots or Beer?');
     },
     'GetShotsIntent': function() {
      this.emit('GetShots');
    },
     'GetBeersIntent': function() {
        this.emit('GetBeers');
    }, 
      'GetShots': function () {
       
			  var people = this.t("names");
			  var peopleindex = Math.floor(Math.random() * people.length);
			
        var drinkUp = this.t('SHOTS');
			  var drinkOrder = Math.floor(Math.random() * drinkUp.length);
			
        var randomShot = people[peopleindex] + '..' + 'is with some' + '....' + drinkUp[drinkOrder];
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
			
        var randomBeer = people[peopleindex] + '..' + 'is with some' + '....' + drinkUp[drinkOrder];
          // added '....' to give it a pause in between words in each array


        // Create speech output
        var speechOutput = this.t("GET_SHOT_MESSAGE") + randomBeer;
        this.emit(':tellWithCard', speechOutput, this.t("SKILL_NAME"), randomBeer);
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
