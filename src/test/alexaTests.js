'use strict';
/* jshint node: true */


describe("Did Let's get drunk start and Alexa engage you with a question?", function() {  
 var expect = require('chai').expect,  
    lambdaToTest = require('../index'),
    assert = require('chai').assert,
    context = require('aws-lambda-mock-context'),
    ctx = context(),
    intentType = '',
    intentName = '',
    isIntentNew = '', 
    speechResponse = null,
    speechError = null;
    // Fires once for the group of tests, done is mocha's callback to 
    // let it know that an   async operation has completed before running the rest 
    // of the tests, 2000ms is the default timeout though
    before(function(done){
        //This fires the event to make ambda call as if alexa had iniated it
        lambdaToTest.handler({
         "session": {
    "sessionId": "SessionId.5d613168-8c5a-454a-b77c-f4b6f45b691d",
    "application": {
      "applicationId": "amzn1.ask.skill.0bd86f38-a7ef-42b1-9a4f-93e1acc4f04c"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AF3CKKULZRKESIEK4EUABNUM27S2RGE6AFHNCAAGNF3X3RO4ZUEPF5LPYPXOJOGJF5T4L4PDL2LHRTCE2UV7WYFUNGW24HGP37PQXKR3Q7G74AE5RH2EOY4A7NIHFJUD7V7AAUG6RITMIJ7UXWYYLHNORUP4BZLKC5DLYNP4CXHCNRS7AO6WYQJW4IWLSONF7POIFY7IFKR2QGQ"
    },
    "new": true
  },
  "request": {
    "type": "LaunchRequest",
    "requestId": "EdwRequestId.9a1e8b6e-2f71-4e6d-b788-907ccd593578",
    "locale": "en-US",
    "timestamp": "2017-08-05T04:10:36Z"
  },
  "version": "1.0"
    },ctx);
    //Captures the response and/or errors
    ctx.Promise
        .then(resp => { speechResponse = resp; done(); })
        .catch(err => { speechError = err; done();});
    });
 
// The initial launch of our Alexa app
    describe('should launch skill with no errors return the ssml( text ) and voice phrase(s) back', function() {
        intentType= 'LaunchRequest';
        intentName = '';
        isIntentNew = true;
        it('should not have errored',function() {
            expect(speechError).to.be.a('null');
        });
        it('should have a version', function() {
            expect(speechResponse.version).not.to.be.null;
        });
        it('should have session attributes', function() {
            expect(speechResponse.response.sessionAttributes).not.to.be.a('null');
        });
        it('should tell us that in came back a SSML message type.', function() {
            assert.equal(speechResponse.response.outputSpeech.type, 'SSML');
        });
        it('should have a speechlet response ready to speak', function() {
            expect(speechResponse.response).not.to.be.a('null');
        });
        it('should speak out loud asking us if we can handle it?', function()  {
         assert.equal(speechResponse.response.outputSpeech.ssml, '<speak> Sure, but do you really think that you can handle Alexa? </speak>');
        });
        it('should leave the Alexa session open', function() {
         expect(speechResponse.response.shouldEndSession).not.to.be.a('null');
         assert.equal(speechResponse.response.shouldEndSession,false);
        }); 
          //We have now successfully launched our skill, with everything coming back correctly in all formats
    }); 
 });

//#############################################################################################################//
//Start of IntentTypes intentRequest
describe("Alexa should have asked you if you can handle and is waiting for you to say so or not", function() {  
 var expect = require('chai').expect,  
    lambdaToTest = require('../index'),
    assert = require('chai').assert,
    context = require('aws-lambda-mock-context'),
    ctx = context(),
    intentType = '',
    intentName = '',
    isIntentNew = '', 
    speechResponse = null,
    speechError = null;
    // Fires once for the group of tests, done is mocha's callback to 
    // let it know that an   async operation has completed before running the rest 
    // of the tests, 2000ms is the default timeout though
    before(function(done){
        //This fires the event to make ambda call as if alexa had iniated it
        lambdaToTest.handler({
          "session": {
    "sessionId": "SessionId.f3df8f77-faf0-4bc3-a0d4-9d68a40de19e",
    "application": {
      "applicationId": "amzn1.ask.skill.0bd86f38-a7ef-42b1-9a4f-93e1acc4f04c"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AF3CKKULZRKESIEK4EUABNUM27S2RGE6AFHNCAAGNF3X3RO4ZUEPF5LPYPXOJOGJF5T4L4PDL2LHRTCE2UV7WYFUNGW24HGP37PQXKR3Q7G74AE5RH2EOY4A7NIHFJUD7V7AAUG6RITMIJ7UXWYYLHNORUP4BZLKC5DLYNP4CXHCNRS7AO6WYQJW4IWLSONF7POIFY7IFKR2QGQ"
    },
    "new": true
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "EdwRequestId.71150d06-99ee-4d8d-b3a3-637bd3b9a8f8",
    "locale": "en-US",
    "timestamp": "2017-08-05T04:17:24Z",
    "intent": {
      "name": "AMAZON.YesIntent",
      "slots": {}
    }
  },
  "version": "1.0"
    },ctx);
    //Captures the response and/or errors
    ctx.Promise
        .then(resp => { speechResponse = resp; done(); })
        .catch(err => { speechError = err; done();});
    });
 
// Waiting on response from user to the question of handling Alexa
    describe('should have gotten response from user and depending on answer move on to yes or no', function() {
        intentType= 'LaunchRequest';
        intentName = '';
        isIntentNew = true;
        it('should not have errored',function() {
            expect(speechError).to.be.null;
        });
        it('should have a version', function() {
            expect(speechResponse.version).not.to.be.null;
        });
        it('should have session attributes', function() {
            expect(speechResponse.response.sessionAttributes).not.to.be.null;
        });
        it('should tell us that in came back a SSML message type.', function() {
            assert.equal(speechResponse.response.outputSpeech.type, 'SSML');
        });
        it('should have a speechlet response ready to speak', function() {
            expect(speechResponse.response).not.to.be.null;
        });
        //We choose Yes for our answer promptong the next question to the inquiry of type of drink 
        it('should speak out loud asking us if we can handle it?', function()  {
         assert.equal(speechResponse.response.outputSpeech.ssml, '<speak> Awesome, are we drinking Shots or Beer? </speak>');
        });
        it('should leave the Alexa session open', function() {
            expect(speechResponse.response.shouldEndSession).not.to.be.null,
            expect(speechResponse.response.shouldEndSession).to.be.false;
        }); 
          //We have now successfully launched our skill, with everything coming back correctly in all formats
    }); 
 });
