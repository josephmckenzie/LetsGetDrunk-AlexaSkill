'use strict';
/* jslint node: true */
/* jshint esnext: true */
/* eslint-env es6 */

var mocha = require('/usr/local/lib/node_modules/mocha');
var expect = require('/usr/local/lib/node_modules/chai').expect;
var lambdaToTest = require('../index.js');
var assert = require('/usr/local/lib/node_modules/chai').assert;
var context = require('/usr/local/lib/node_modules/aws-lambda-mock-context');
var ctx = context();
var describe = mocha.describe;
var it = mocha.it;
var intentType = '';
var intentName = '';
var isIntentNew = '';
var mockResponse = require('../mockResponse.json');;
var ary = [] || ary;
var attributes = {} || attributes;
var name = '' || name;
var sessionSpot = '' || sessionSpot;
function searchAttributes(nameKey){
 var attr = ary; 
 for (var i=0; i < attr.length; i++) {
        if (attr[i].name === nameKey) {
            return attr[i];
        }
    }
}

describe('When Starting a Session', () => {  
    var speechResponse = null;
    var speechError = null;

    // Fires once for the group of tests, done is mocha's callback to 
    // let it know that an   async operation has completed before running the rest 
    // of the tests, 2000ms is the default timeout though
    before( (done) =>{
        //This fires the event as if a Lambda call was being sent in
        lambdaToTest.handler({
        "session": {
        "new": isIntentNew,
        "sessionId": "SessionId.69f59134-db7e-474b-8365-052caa26d97b",
        "attributes": attributes,
        "user": {
        "userId": "amzn1.ask.account.AF3CKKULZRKESIEK4EUABNUM27S2RGE6AFHNCAAGNF3X3RO4ZUEPF5LPYPXOJOGJF5T4L4PDL2LHRTCE2UV7WYFUNGW24HGP37PQXKR3Q7G74AE5RH2EOY4A7NIHFJUD7V7AAUG6RITMIJ7UXWYYLHNORUP4BZLKC5DLYNP4CXHCNRS7AO6WYQJW4IWLSONF7POIFY7IFKR2QGQ"
        },
        "application": {
        "applicationId": "amzn1.ask.skill.0bd86f38-a7ef-42b1-9a4f-93e1acc4f04c"
        }
        },
        "version": "1.0",
        "request": {
        "type": intentType,
        "requestId": "EdwRequestId.64765faa-8fc8-4e05-98ba-b03495098bcb",
        "locale": "en-US",
        "timestamp": "2017-07-30T03:37:19Z",
        "intent": {
        "name": intentName,
        "slots": {}
    }
  },
    },ctx);

    //Captures the response and/or errors
    ctx.Promise
        .then(resp => { speechResponse = resp; done(); })
        .catch(err => { speechError = err; done();});
    });
    //initial launch of our Alexa app
 console.log(ary);
  describe('should return JSON that parses revelant skill info, and converts to speech', () => {
   var sessionSpot = 'Initial App launched, Alexa Asks: Can you handle Alexa?';
   
ary.push({['name']: sessionSpot});

   
    intentType = 'LaunchRequest';
    intentName = '';
    isIntentNew = true;
    console.log("Test 1 Test for" + " " + "Initial App launched, Alexa Asks: Can you handle Alexa?");

    it('should not have errored', () => {

      expect(speechError).to.be.null;
    });
 
    it('should have a version', () => {
      expect(speechResponse.version).not.to.be.null;
    });
    it('should have session attributes', () => {
     expect(speechResponse.sessionAttributes).not.to.be.a('null');
      
    })
    it('should add attribute to our attributes in order to keep sessions alive', () => {
     var currentAttribute = searchAttributes('Initial App launched, Alexa Asks: Can you handle Alexa?');
     console.log(searchAttributes('Initial App launched, Alexa Asks: Can you handle Alexa?'));   
     expect(currentAttribute.name).to.equal('Initial App launched, Alexa Asks: Can you handle Alexa?');
    });
    it('should tell us that in came back a SSML message type.', () => {
      assert.equal(speechResponse.response.outputSpeech.type, 'SSML')
    })
    it('should have a speechlet response ready to speak', () => {
      expect(speechResponse.response).not.to.be.null
    })
    it('should speak out loud asking us if we can handle it?', () => {
      assert.equal(speechResponse.response.outputSpeech.ssml, '<speak> Sure, but do you really think that you can handle Alexa? </speak>')
    })
    it('should leave the Alexa session open', () => {
      expect(speechResponse.response.shouldEndSession).not.to.be.null,
            expect(speechResponse.response.shouldEndSession).to.be.false
    });
});
 
  describe('should be waiting on user response after having just asked if we can handle her ', () =>{
    console.log("Test 2 Test for " + "Alexa asked: Can you handle Alexa?, Awaiting: Response");
    intentType = 'IntentRequest'
    intentName = 'AMAZON.YesIntent'
    isIntentNew = true

   
    var sessionSpot = 'Alexa asked: Can you handle Alexa?, Awaiting: Response';
    ary.push({['name']: sessionSpot});

   var resultObject = searchAttributes("Alexa asked: Can you handle Alexa?, Awaiting: Response", ary);
console.log(resultObject);
        it('should not have errored', () => {
            expect(speechError).to.be.null;
        });
        it('should have a version', () => {
            expect(speechResponse.version).not.to.be.null;
        });

        it('should update attributes hash with new attributes', () => {
           searchAttributes("'Alexa asked: Cant you handle Alexa?, Awaiting: Response'", ary);
        });

        it('should have session attributes', () => {
            expect(speechResponse.response.sessionAttributes).not.to.be.null;

        });
        it('should tell us that in came back a SSML message type.', () => {
            assert.equal(speechResponse.response.outputSpeech.type, 'SSML');
        });
        it('should have a speechlet response ready to speak', () => {
            expect(speechResponse.response).not.to.be.null;
        });
        it('should speak out loud asking us if we can handle it?', () =>  {
         expect(speechResponse.response.outputSpeech.ssml).to.equal('<speak> Sure, but do you really think that you can handle Alexa? </speak>');
        });
        it('should leave the Alexa session open', () => {
            expect(speechResponse.response.shouldEndSession).not.to.be.null,
            expect(speechResponse.response.shouldEndSession).to.be.false;
        });
  });
////           We have now successfully launched our skill, with everything coming back correctly in all formats

    describe('should be waiting on user response after having just asked if we can handle her ', () => {
        console.log("Alexa asked: Can you handle her?, Resonded: 'Yes'");
        intentType= 'IntentRequest';
        intentName =  "AMAZON.YesIntent";
        isIntentNew = true;
        var sessionSpot = "Alexa asked: Can you handle her?, Resonded: 'Yes'";
        ary.push({['name']: sessionSpot});

        it('should not have errored',() => {
            expect(speechError).to.be.null;
        });
        it('should have a version', () => {
            expect(speechResponse.version).not.to.be.null;
        });
        it('should have session attributes', () => {
            expect(speechResponse.response.sessionAttributes).not.to.be.null;
        });
        it('should tell us that in came back a SSML message type.', () => {
            assert.equal(speechResponse.response.outputSpeech.type, 'SSML');
        });
        it('should have a speechlet response', () => {
            expect(speechResponse.response).not.to.be.null;
        });

        it('should speak the phrase Are we drinking Shots or Beer?', () => {
            assert.equal(speechResponse.response.outputSpeech.ssml, '<speak> Are we drinking Shots or Beer? </speak>');
        });

        it('should leave the session open and proceed to the next question based on their answer', () => {
            expect(speechResponse.response.shouldEndSession).not.to.be.null,
            expect(speechResponse.response.shouldEndSession).to.be.false;
        });
    });
     // We will have to mock a response from Alexa as it returns random names and shots.
     // We can mock just the JSON response of the returned outputSpeech.ssml which will be the spoken phrase
     // We also could mock the whole JSON response but that is not good as we still want to test the rest of the call just not
     // what is returned as far as the random phrase
//    describe('if shots were picked should return a random person and a shot for that person to drink.', () => {
//        intentType= 'IntentRequest';
//        intentName =  "AMAZON.YesIntent";
//        isIntentNew = true;
//          it('should not have errored',() => {
//            expect(speechError).to.be.null;
//          });
//          it('should have a version', () => {
//              expect(speechResponse.version).not.to.be.null;
//          });
//          it('should have session attributes', () => {
//              expect(speechResponse.response.sessionAttributes).not.to.be.null;
//          });
//          it('should tell us that in came back a SSML message type.', () => {
//              assert.equal(speechResponse.response.outputSpeech.type, 'SSML');
//          });
//          it('should have a speechlet response', () => {
//              expect(speechResponse.response).not.to.be.null;
//          });
//
//          it('should speak the phrase Are we drinking Shots or Beer?', () => {
//              assert.equal(mockResponse.response.outputSpeech.ssml, "<speak> Who's up next? ....Joe is with some Moonshine </speak>");
//          });
//
//          it('should leave the session open and proceed to a follow up question', () => {
//              expect(speechResponse.response.shouldEndSession).not.to.be.null,
//              expect(speechResponse.response.shouldEndSession).to.be.false;
//          });
//    });
//
//    describe('ask if anymore people want drinks and return that drink and person', () => {
//
//          it('should ask if anyone else would like to continue and play', () => {
//            assert.equal(speechResponse.response.outputSpeech.ssml, '<speak> Are we drinking Shots or Beer? </speak>');
//          });
//
//          it('should not have errored',() => {
//            expect(speechError).to.be.null;
//          });
//          it('should have a version', () => {
//              expect(speechResponse.version).not.to.be.null;
//          });
//          it('should have session attributes', () => {
//              expect(speechResponse.response.sessionAttributes).not.to.be.null;
//          });
//          it('should tell us that in came back a SSML message type.', () => {
//              assert.equal(speechResponse.response.outputSpeech.type, 'SSML');
//          });
//          it('should have a speechlet response', () => {
//              expect(speechResponse.response).not.to.be.null;
//          });
//
//          it('should speak the phrase Are we drinking Shots or Beer?', () => {
//              assert.equal(mockResponse.response.outputSpeech.ssml, "<speak> Who's up next? ....Joe is with some Moonshine </speak>");
//          });
//
//          it('should leave the session open and proceed to a follow up question', () => {
//              expect(speechResponse.response.shouldEndSession).not.to.be.null,
//              expect(speechResponse.response.shouldEndSession).to.be.false;
//          });
//
//
//    });
//
//})
});
