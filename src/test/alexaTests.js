'use strict';

/* jslint node: true */
/* jshint esnext: true */
/* eslint-env es6 */
// import chai from "chai"
//import chai from "chai"
//import {addTwo} from "../index"
//let expect = chai.expect
//let should = chai.should()
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
    // Fires once for the group of tests, done is mocha's callback to
    // let it know that an   async operation has completed before running the rest

 var mockResponse = require('../mockResponse.json');;
// var gamePlay = require(('../gamePlay.json'))


var attributes = '';
var attributesHash;
var parseIt;
//
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
        "attributes": {},
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
  describe('should return JSON that parses revelant skill info, and converts to speech', () => {
    console.log('Initial Launch Test');

    intentType = 'LaunchRequest';
    intentName = '';
    isIntentNew = true;
   
    attributes = {'name': 'Initial Launch of App'};
    attributesHash = JSON.stringify(attributes.name);
    parseIt = JSON.parse(attributesHash)

    it('should not have errored', () => {
//         console.log(speechResponse);

      expect(speechError).to.be.null;
    });
 
    it('should have a version', () => {
      expect(speechResponse.version).not.to.be.null;
    });
    it('should have session attributes', () => {
     expect(speechResponse.response.sessionAttributes).not.to.be.a('null');
      
    })
    it('should add attribute to our attributes in order to keep sessions alive', () => {
      assert.equal(parseIt, 'Initial Launch of App');
    })
    it('should tell us that in came back a SSML message type.', () => {
      assert.equal(speechResponse.response.outputSpeech.type, 'SSML')
    })
    it('should have a speechlet response ready to speak', () => {
      expect(speechResponse.response).not.to.be.null
    })
    it('should speak out loud asking us if we can handle it?', () => {
      assert.equal(speechResponse.response.outputSpeech.ssml, '<speak> Ok sure thing, but do you think that you can handle Alexa in drinking contest? </speak>')
    })
    it('should leave the Alexa session open', () => {
      expect(speechResponse.response.shouldEndSession).not.to.be.null,
            expect(speechResponse.response.shouldEndSession).to.be.false
    });
});
 
});
  
//  describe('should be waiting on user response after having just asked if we can handle her ', function () {
//    console.log('Initial Launch Test')
//    intentType = 'LaunchRequest'
//    intentName = 'LaunchRequest'
//    isIntentNew = true
//    attributes = {'name': 'Initial Launch of App'}
//    attributesHash = JSON.stringify(attributes.name)
//    parseIt = JSON.parse(attributesHash)

//        it('should not have errored',function() {
//            expect(speechError).to.be.null;
//        });
//        it('should have a version', function() {
//            expect(speechResponse.version).not.to.be.null;
//        });

//        it('should start off as a new session for the launch intent should only be used one time', function() {
/// /
//        var attributesHash = JSON.stringify(attributes.name);
//        var parseIt = JSON.parse(attributesHash);
//        console.log(parseIt);
//            assert.equal(parseIt,'Initial Launch of App');
//        });
//
//        it('should have session attributes', function() {
//            expect(speechResponse.response.sessionAttributes).not.to.be.null;
//
//        });
//        it('should tell us that in came back a SSML message type.', function() {
//            assert.equal(speechResponse.response.outputSpeech.type, 'SSML');
//        });
//        it('should have a speechlet response ready to speak', function() {
//            expect(speechResponse.response).not.to.be.null;
//        });
//        it('should speak out loud asking us if we can handle it?', function()  {
//         assert.equal(speechResponse.response.outputSpeech.ssml, '<speak> Sounds good, but are you sure you can handle it? </speak>');
//        });
//        it('should leave the Alexa session open', function() {
//            expect(speechResponse.response.shouldEndSession).not.to.be.null,
//            expect(speechResponse.response.shouldEndSession).to.be.false;
//        });
          // We have now successfully launched our skill, with everything coming back correctly in all formats
//  })

//    describe('should be waiting on user response after having just asked if we can handle her ', function() {
//        intentType= 'IntentRequest';
//        intentName =  "AMAZON.YesIntent";
//        isIntentNew = true;
//        attributes = {"name":"Shots or Beers"};
//
//        it('should not have errored',function() {
//            expect(speechError).to.be.null;
//        });
//        it('should have a version', function() {
//            expect(speechResponse.version).not.to.be.null;
//        });
//        it('should have session attributes', function() {
//            expect(speechResponse.response.sessionAttributes).not.to.be.null;
//        });
//        it('should tell us that in came back a SSML message type.', function() {
//            assert.equal(speechResponse.response.outputSpeech.type, 'SSML');
//        });
//        it('should have a speechlet response', function() {
//            expect(speechResponse.response).not.to.be.null;
//        });
//
//        it('should speak the phrase Are we drinking Shots or Beer?', function() {
//            assert.equal(speechResponse.response.outputSpeech.ssml, '<speak> Are we drinking Shots or Beer? </speak>');
//        });
//
//        it('should leave the session open and proceed to the next question based on their answer', function() {
//            expect(speechResponse.response.shouldEndSession).not.to.be.null,
//            expect(speechResponse.response.shouldEndSession).to.be.false;
//        });
//    });
     // We will have to mock a response from Alexa as it returns random names and shots.
     // We can mock just the JSON response of the returned outputSpeech.ssml which will be the spoken phrase
     // We also could mock the whole JSON response but that is not good as we still want to test the rest of the call just not
     // what is returned as far as the random phrase
//    describe('if shots were picked should return a random person and a shot for that person to drink.', function() {
//        intentType= 'IntentRequest';
//        intentName =  "AMAZON.YesIntent";
//        isIntentNew = true;
//          it('should not have errored',function() {
//            expect(speechError).to.be.null;
//          });
//          it('should have a version', function() {
//              expect(speechResponse.version).not.to.be.null;
//          });
//          it('should have session attributes', function() {
//              expect(speechResponse.response.sessionAttributes).not.to.be.null;
//          });
//          it('should tell us that in came back a SSML message type.', function() {
//              assert.equal(speechResponse.response.outputSpeech.type, 'SSML');
//          });
//          it('should have a speechlet response', function() {
//              expect(speechResponse.response).not.to.be.null;
//          });
//
//          it('should speak the phrase Are we drinking Shots or Beer?', function() {
//              assert.equal(mockResponse.response.outputSpeech.ssml, "<speak> Who's up next? ....Joe is with some Moonshine </speak>");
//          });
//
//          it('should leave the session open and proceed to a follow up question', function() {
//              expect(speechResponse.response.shouldEndSession).not.to.be.null,
//              expect(speechResponse.response.shouldEndSession).to.be.false;
//          });
//    });
//
//    describe('ask if anymore people want drinks and return that drink and person', function() {
//
//          it('should ask if anyone else would like to continue and play', function() {
//            assert.equal(speechResponse.response.outputSpeech.ssml, '<speak> Are we drinking Shots or Beer? </speak>');
//          });
//
//          it('should not have errored',function() {
//            expect(speechError).to.be.null;
//          });
//          it('should have a version', function() {
//              expect(speechResponse.version).not.to.be.null;
//          });
//          it('should have session attributes', function() {
//              expect(speechResponse.response.sessionAttributes).not.to.be.null;
//          });
//          it('should tell us that in came back a SSML message type.', function() {
//              assert.equal(speechResponse.response.outputSpeech.type, 'SSML');
//          });
//          it('should have a speechlet response', function() {
//              expect(speechResponse.response).not.to.be.null;
//          });
//
//          it('should speak the phrase Are we drinking Shots or Beer?', function() {
//              assert.equal(mockResponse.response.outputSpeech.ssml, "<speak> Who's up next? ....Joe is with some Moonshine </speak>");
//          });
//
//          it('should leave the session open and proceed to a follow up question', function() {
//              expect(speechResponse.response.shouldEndSession).not.to.be.null,
//              expect(speechResponse.response.shouldEndSession).to.be.false;
//          });
//
//
//    });
//
//})
