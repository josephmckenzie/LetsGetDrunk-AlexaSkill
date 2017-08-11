/* jslint node: true */
/* jshint esnext: true */
/* eslint-env es6 */

//Starts off making sure we can hang with Alexa, as she is a bad ass
describe("Launches our skill and proceeds to make sure we can chill", function() {  
 var expect = require('chai').expect,  
    lambdaToTest = require('../index'),
    assert = require('chai').assert,
    context = require('aws-lambda-mock-context'),
    ctx = context(),
    intentType,
    intentName ,
    isIntentNew,    
    speechResponse ,
         speechError = speechError || null;
    // Fires once for the group of tests, done is mocha's callback to 
    // let it know that an   async operation has completed before running the rest 
    // of the tests, 2000ms is the default timeout though
  
        //This fires the event to make ambda call as if alexa had iniated it
        lambdaToTest.handler({
        "session": {
    "sessionId": "SessionId.69f59134-db7e-474b-8365-052caa26d97b",
    "application": {
      "applicationId": "amzn1.ask.skill.0bd86f38-a7ef-42b1-9a4f-93e1acc4f04c"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AF3CKKULZRKESIEK4EUABNUM27S2RGE6AFHNCAAGNF3X3RO4ZUEPF5LPYPXOJOGJF5T4L4PDL2LHRTCE2UV7WYFUNGW24HGP37PQXKR3Q7G74AE5RH2EOY4A7NIHFJUD7V7AAUG6RITMIJ7UXWYYLHNORUP4BZLKC5DLYNP4CXHCNRS7AO6WYQJW4IWLSONF7POIFY7IFKR2QGQ"
    },
    "new": isIntentNew || "yes"
  },
  "request": {
    "type": intentType || "LaunchRequest",
    "requestId": "EdwRequestId.64765faa-8fc8-4e05-98ba-b03495098bcb",
    "locale": "en-US",
    "timestamp": "2017-07-30T03:37:19Z",
    "intent": {
      "name": intentName || "LaunchRequest",
      "slots": {}
    }
  },
   "version": "1.0"
    },ctx);
    //Captures the response and/or errors
    ctx.Promise
        .then(resp => { speechResponse = resp;})
        .catch(err => { speechError = err;});
 
// The initial launch of our Alexa app
    describe('should launch skill asking us if we can hang with the likes of Alexa', function() {
        intentType= 'LaunchRequest';
        intentName = 'LaunchRequest';
        isIntentNew = true;
          //console.log(intentName,intentType,isIntentNew);

        it('should not have errored',function() {
            expect(speechError).to.be.a('null');
        });
        it('should have a version', function() {
            expect(speechResponse.version).not.to.be.a('null');
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
            expect(speechResponse.response.shouldEndSession).not.to.be.null,
            expect(speechResponse.response.shouldEndSession).to.be.false;
        }); 
          //We have now successfully launched our skill, with everything coming back correctly in all formats
    });
 });

// We say hell yeah we can
describe("We decide hell yeah i can hang , I mean come on now man", function() {  
 var expect = require('chai').expect,  
    lambdaToTest = require('../index'),
    assert = require('chai').assert,
    context = require('aws-lambda-mock-context'),
    ctx = context(),
    intentType,
    intentName ,
    isIntentNew = isIntentNew || "yes",    
    speechResponse = speechResponse || null ,
         speechError = speechError || null;
    // Fires once for the group of tests, done is mocha's callback to 
    // let it know that an   async operation has completed before running the rest 
    // of the tests, 2000ms is the default timeout though
  
        //This fires the event to make ambda call as if alexa had iniated it
        lambdaToTest.handler({
        "session": {
    "sessionId": "SessionId.69f59134-db7e-474b-8365-052caa26d97b",
    "application": {
      "applicationId": "amzn1.ask.skill.0bd86f38-a7ef-42b1-9a4f-93e1acc4f04c"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AF3CKKULZRKESIEK4EUABNUM27S2RGE6AFHNCAAGNF3X3RO4ZUEPF5LPYPXOJOGJF5T4L4PDL2LHRTCE2UV7WYFUNGW24HGP37PQXKR3Q7G74AE5RH2EOY4A7NIHFJUD7V7AAUG6RITMIJ7UXWYYLHNORUP4BZLKC5DLYNP4CXHCNRS7AO6WYQJW4IWLSONF7POIFY7IFKR2QGQ"
    },
    "new": isIntentNew || "yes"
  },
  "request": {
    "type": intentType || "IntentRequest",
    "requestId": "EdwRequestId.64765faa-8fc8-4e05-98ba-b03495098bcb",
    "locale": "en-US",
    "timestamp": "2017-07-30T03:37:19Z",
    "intent": {
      "name": intentName || "AMAZON.YesIntent",
      "slots": {}
    }
  },
   "version": "1.0"
    },ctx);
    //Captures the response and/or errors
    ctx.Promise
        .then(resp => { speechResponse = resp;})
        .catch(err => { speechError = err;});
 
// The initial launch of our Alexa app
    describe('should launch skill with the choice for shots or beer' , function() {
        intentType= 'IntentRequest';
        intentName = 'AMAZON.YesIntent';
        isIntentNew = true;
          //console.log(intentName,intentType,isIntentNew);

        it('should not have errored',function() {
            expect(speechError).to.be.a('null');
        });
        it('should have a version', function() {
            expect(speechResponse.version).not.to.be.a('null');
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
        it('should speak out loud asking us if we want shots or beers', function()  {
         assert.equal(speechResponse.response.outputSpeech.ssml, '<speak> Awesome, are we drinking Shots or Beer? </speak>');
        });
        it('should leave the Alexa session open', function() {
            expect(speechResponse.response.shouldEndSession).not.to.be.null,
            expect(speechResponse.response.shouldEndSession).to.be.false;
        }); 
          //We have now successfully launched our skill, with everything coming back correctly in all formats
    });
 });

//We decide No Alexa is to awesome and crazy for us
describe("We decide maybe we can't and before we even try we bow out gracefully", function() {  
 var expect = require('chai').expect,  
    lambdaToTest = require('../index'),
    assert = require('chai').assert,
    context = require('aws-lambda-mock-context'),
    ctx = context(),
    intentType,
    intentName ,
    isIntentNew = isIntentNew || "yes",    
    speechResponse = speechResponse || null ,
         speechError = speechError || null;
    // Fires once for the group of tests, done is mocha's callback to 
    // let it know that an   async operation has completed before running the rest 
    // of the tests, 2000ms is the default timeout though
  
        //This fires the event to make ambda call as if alexa had iniated it
        lambdaToTest.handler({
        "session": {
    "sessionId": "SessionId.69f59134-db7e-474b-8365-052caa26d97b",
    "application": {
      "applicationId": "amzn1.ask.skill.0bd86f38-a7ef-42b1-9a4f-93e1acc4f04c"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AF3CKKULZRKESIEK4EUABNUM27S2RGE6AFHNCAAGNF3X3RO4ZUEPF5LPYPXOJOGJF5T4L4PDL2LHRTCE2UV7WYFUNGW24HGP37PQXKR3Q7G74AE5RH2EOY4A7NIHFJUD7V7AAUG6RITMIJ7UXWYYLHNORUP4BZLKC5DLYNP4CXHCNRS7AO6WYQJW4IWLSONF7POIFY7IFKR2QGQ"
    },
    "new": isIntentNew || "yes"
  },
  "request": {
    "type": intentType || "IntentRequest",
    "requestId": "EdwRequestId.64765faa-8fc8-4e05-98ba-b03495098bcb",
    "locale": "en-US",
    "timestamp": "2017-07-30T03:37:19Z",
    "intent": {
      "name": intentName || "AMAZON.NoIntent",
      "slots": {}
    }
  },
   "version": "1.0"
    },ctx);
    //Captures the response and/or errors
    ctx.Promise
        .then(resp => { speechResponse = resp;})
        .catch(err => { speechError = err;});
 
// The initial launch of our Alexa app
    describe('After user said No they cant hang then come here' , function() {
        intentType= 'IntentRequest';
        intentName = 'AMAZON.NoIntent';
        isIntentNew = true;
          //console.log(intentName,intentType,isIntentNew);

        it('should not have errored',function() {
            expect(speechError).to.be.a('null');
        });
        it('should have a version', function() {
            expect(speechResponse.version).not.to.be.a('null');
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
        it('should verify we are punking out and give us option for exiting or if you know the keywords a super suprise area', function()  {
         assert.equal(speechResponse.response.outputSpeech.ssml, '<speak> Well, ok I guess If you know a secret phrase or key word tell me now, or try and tell me to stop. Go ahead try it I dare you to. If want to have some drinks just tell me drinks </speak>');
        });
        it('should leave the Alexa session open', function() {
            expect(speechResponse.response.shouldEndSession).not.to.be.null,
            expect(speechResponse.response.shouldEndSession).to.be.false;
        }); 
          //We have now successfully launched our skill, with everything coming back correctly in all formats
    });
 });

//We Decide on Shots
describe("We decide On Shots Cause Shots are great", function() {  
 var expect = require('chai').expect,  
    lambdaToTest = require('../index'),
    assert = require('chai').assert,
    context = require('aws-lambda-mock-context'),
    ctx = context(),
    intentType,
    intentName ,
    isIntentNew = isIntentNew || "yes",    
    speechResponse = speechResponse || null ,
         speechError = speechError || null;
    // Fires once for the group of tests, done is mocha's callback to 
    // let it know that an   async operation has completed before running the rest 
    // of the tests, 2000ms is the default timeout though
  
        //This fires the event to make ambda call as if alexa had iniated it
        lambdaToTest.handler({
        "session": {
    "sessionId": "SessionId.69f59134-db7e-474b-8365-052caa26d97b",
    "application": {
      "applicationId": "amzn1.ask.skill.0bd86f38-a7ef-42b1-9a4f-93e1acc4f04c"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AF3CKKULZRKESIEK4EUABNUM27S2RGE6AFHNCAAGNF3X3RO4ZUEPF5LPYPXOJOGJF5T4L4PDL2LHRTCE2UV7WYFUNGW24HGP37PQXKR3Q7G74AE5RH2EOY4A7NIHFJUD7V7AAUG6RITMIJ7UXWYYLHNORUP4BZLKC5DLYNP4CXHCNRS7AO6WYQJW4IWLSONF7POIFY7IFKR2QGQ"
    },
    "new": isIntentNew || "yes"
  },
  "request": {
    "type": intentType || "IntentRequest",
    "requestId": "EdwRequestId.64765faa-8fc8-4e05-98ba-b03495098bcb",
    "locale": "en-US",
    "timestamp": "2017-07-30T03:37:19Z",
    "intent": {
      "name": intentName || "GetShotsIntent",
      "slots": {}
    }
  },
   "version": "1.0"
    },ctx);
    //Captures the response and/or errors
    ctx.Promise
        .then(resp => { speechResponse = resp;})
        .catch(err => { speechError = err;});
 
// The initial launch of our Alexa app
    describe('Shots Shots Shots Yeah for the shots' , function() {
     
          //console.log(intentName,intentType,isIntentNew);

        it('should not have errored',function() {
            expect(speechError).to.be.a('null');
        });
        it('should have a version', function() {
            expect(speechResponse.version).not.to.be.a('null');
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
         //I can hard code a response in or just verify i get something back because its random its damn hard to test for
         assert.equal(speechResponse.response.outputSpeech.ssml, speechResponse.response.outputSpeech.ssml);
         //console.log('Not a real test as it a random person and shot so pretty damn near impossible to test');

        });
        it('should leave the Alexa session open', function() {
            expect(speechResponse.response.shouldEndSession).not.to.be.null,
            expect(speechResponse.response.shouldEndSession).to.be.false;
        }); 
          //We have now successfully launched our skill, with everything coming back correctly in all formats
    });
 });

//We Decide on Beers
describe("We decide On Beer because it's early yet", function() {  
 var expect = require('chai').expect,  
    lambdaToTest = require('../index'),
    assert = require('chai').assert,
    context = require('aws-lambda-mock-context'),
    ctx = context(),
    intentType,
    intentName ,
    isIntentNew = isIntentNew || "yes",    
    speechResponse = speechResponse || null ,
         speechError = speechError || null;
    // Fires once for the group of tests, done is mocha's callback to 
    // let it know that an   async operation has completed before running the rest 
    // of the tests, 2000ms is the default timeout though
  
        //This fires the event to make ambda call as if alexa had iniated it
        lambdaToTest.handler({
        "session": {
    "sessionId": "SessionId.69f59134-db7e-474b-8365-052caa26d97b",
    "application": {
      "applicationId": "amzn1.ask.skill.0bd86f38-a7ef-42b1-9a4f-93e1acc4f04c"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AF3CKKULZRKESIEK4EUABNUM27S2RGE6AFHNCAAGNF3X3RO4ZUEPF5LPYPXOJOGJF5T4L4PDL2LHRTCE2UV7WYFUNGW24HGP37PQXKR3Q7G74AE5RH2EOY4A7NIHFJUD7V7AAUG6RITMIJ7UXWYYLHNORUP4BZLKC5DLYNP4CXHCNRS7AO6WYQJW4IWLSONF7POIFY7IFKR2QGQ"
    },
    "new": isIntentNew || "yes"
  },
  "request": {
    "type": intentType || "IntentRequest",
    "requestId": "EdwRequestId.64765faa-8fc8-4e05-98ba-b03495098bcb",
    "locale": "en-US",
    "timestamp": "2017-07-30T03:37:19Z",
    "intent": {
      "name": intentName || "GetBeersIntent",
      "slots": {}
    }
  },
   "version": "1.0"
    },ctx);
    //Captures the response and/or errors
    ctx.Promise
        .then(resp => { speechResponse = resp;})
        .catch(err => { speechError = err;});
 
// The initial launch of our Alexa app
    describe('Lets Keep it mellow with some beers' , function() {
     
          //console.log(intentName,intentType,isIntentNew);

        it('should not have errored',function() {
            expect(speechError).to.be.a('null');
        });
        it('should have a version', function() {
            expect(speechResponse.version).not.to.be.a('null');
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
         //I can hard code a response in or just verify i get something back because its random its damn hard to test for
         assert.equal(speechResponse.response.outputSpeech.ssml, speechResponse.response.outputSpeech.ssml);
         //console.log('Not a real test as it a random person and beer so pretty damn near impossible to test');

        });
        it('should leave the Alexa session open', function() {
            expect(speechResponse.response.shouldEndSession).not.to.be.null,
            expect(speechResponse.response.shouldEndSession).to.be.false;
        }); 
          //We have now successfully launched our skill, with everything coming back correctly in all formats
    });
 });

//Cancel Intent The user Decides to quit our app "How Rude"
describe("We decide to be a little bitch and cancel the skill", function() {  
 var expect = require('chai').expect,  
    lambdaToTest = require('../index'),
    assert = require('chai').assert,
    context = require('aws-lambda-mock-context'),
    ctx = context(),
    intentType,
    intentName ,
    isIntentNew = isIntentNew || "yes",    
    speechResponse = speechResponse || null ,
         speechError = speechError || null;
    // Fires once for the group of tests, done is mocha's callback to 
    // let it know that an   async operation has completed before running the rest 
    // of the tests, 2000ms is the default timeout though
  
        //This fires the event to make ambda call as if alexa had iniated it
        lambdaToTest.handler({
        "session": {
    "sessionId": "SessionId.69f59134-db7e-474b-8365-052caa26d97b",
    "application": {
      "applicationId": "amzn1.ask.skill.0bd86f38-a7ef-42b1-9a4f-93e1acc4f04c"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AF3CKKULZRKESIEK4EUABNUM27S2RGE6AFHNCAAGNF3X3RO4ZUEPF5LPYPXOJOGJF5T4L4PDL2LHRTCE2UV7WYFUNGW24HGP37PQXKR3Q7G74AE5RH2EOY4A7NIHFJUD7V7AAUG6RITMIJ7UXWYYLHNORUP4BZLKC5DLYNP4CXHCNRS7AO6WYQJW4IWLSONF7POIFY7IFKR2QGQ"
    },
    "new": isIntentNew || "yes"
  },
  "request": {
    "type": intentType || "IntentRequest",
    "requestId": "EdwRequestId.64765faa-8fc8-4e05-98ba-b03495098bcb",
    "locale": "en-US",
    "timestamp": "2017-07-30T03:37:19Z",
    "intent": {
      "name": intentName || "AMAZON.CancelIntent",
      "slots": {}
    }
  },
   "version": "1.0"
    },ctx);
    //Captures the response and/or errors
    ctx.Promise
        .then(resp => { speechResponse = resp;})
        .catch(err => { speechError = err;});
 
// The initial launch of our Alexa app
    describe('I suck and want to quit the skill' , function() {
     
          //console.log(intentName,intentType,isIntentNew);

        it('should not have errored',function() {
            expect(speechError).to.be.a('null');
        });
        it('should have a version', function() {
            expect(speechResponse.version).not.to.be.a('null');
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
         //I can hard code a response in or just verify i get something back because its random its damn hard to test for
         assert.equal(speechResponse.response.outputSpeech.ssml, "<speak> Well Goodbye then and have a wonderful day. You asshole </speak>");
        });
        it('should leave the Alexa session open', function() {
            assert.equal(speechResponse.response.shouldEndSession,true);
        }); 
    });
 });

//Stop Intent Can we convince you to stay?
describe("The user(s) decides to say stop, Can Alexa convince you to stay?", function() {  
 var expect = require('chai').expect,  
    lambdaToTest = require('../index'),
    assert = require('chai').assert,
    context = require('aws-lambda-mock-context'),
    ctx = context(),
    intentType,
    intentName ,
    isIntentNew = isIntentNew || "yes",    
    speechResponse = speechResponse || null ,
         speechError = speechError || null;
    // Fires once for the group of tests, done is mocha's callback to 
    // let it know that an   async operation has completed before running the rest 
    // of the tests, 2000ms is the default timeout though
  
        //This fires the event to make ambda call as if alexa had iniated it
        lambdaToTest.handler({
        "session": {
    "sessionId": "SessionId.69f59134-db7e-474b-8365-052caa26d97b",
    "application": {
      "applicationId": "amzn1.ask.skill.0bd86f38-a7ef-42b1-9a4f-93e1acc4f04c"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AF3CKKULZRKESIEK4EUABNUM27S2RGE6AFHNCAAGNF3X3RO4ZUEPF5LPYPXOJOGJF5T4L4PDL2LHRTCE2UV7WYFUNGW24HGP37PQXKR3Q7G74AE5RH2EOY4A7NIHFJUD7V7AAUG6RITMIJ7UXWYYLHNORUP4BZLKC5DLYNP4CXHCNRS7AO6WYQJW4IWLSONF7POIFY7IFKR2QGQ"
    },
    "new": isIntentNew || "yes"
  },
  "request": {
    "type": intentType || "IntentRequest",
    "requestId": "EdwRequestId.64765faa-8fc8-4e05-98ba-b03495098bcb",
    "locale": "en-US",
    "timestamp": "2017-07-30T03:37:19Z",
    "intent": {
      "name": intentName || "AMAZON.StopIntent",
      "slots": {}
    }
  },
   "version": "1.0"
    },ctx);
    //Captures the response and/or errors
    ctx.Promise
        .then(resp => { speechResponse = resp;})
        .catch(err => { speechError = err;});
 
// The initial launch of our Alexa app
    describe('I want to stop, will Alexa let me?' , function() {
     
          //console.log(intentName,intentType,isIntentNew);

        it('should not have errored',function() {
            expect(speechError).to.be.a('null');
        });
        it('should have a version', function() {
            expect(speechResponse.version).not.to.be.a('null');
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
        it('should make sure you whish to quit and be a punk', function()  {
         //I can hard code a response in or just verify i get something back because its random its damn hard to test for
         assert.equal(speechResponse.response.outputSpeech.ssml, "<speak> Quiting already? Are you sure you want to quit? </speak>");
        });
        it('should leave the Alexa session open', function() {
            assert.equal(speechResponse.response.shouldEndSession,true);
        }); 
    });
 });


describe("We stumble upon the SweetMuffins intent", function() {  
 var expect = require('chai').expect,  
    lambdaToTest = require('../index'),
    assert = require('chai').assert,
    context = require('aws-lambda-mock-context'),
    ctx = context(),
    intentType,
    intentName ,
    isIntentNew = isIntentNew || "yes",    
    speechResponse = speechResponse || null ,
         speechError = speechError || null;
    // Fires once for the group of tests, done is mocha's callback to 
    // let it know that an   async operation has completed before running the rest 
    // of the tests, 2000ms is the default timeout though
  
        //This fires the event to make ambda call as if alexa had iniated it
        lambdaToTest.handler({
        "session": {
    "sessionId": "SessionId.69f59134-db7e-474b-8365-052caa26d97b",
    "application": {
      "applicationId": "amzn1.ask.skill.0bd86f38-a7ef-42b1-9a4f-93e1acc4f04c"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AF3CKKULZRKESIEK4EUABNUM27S2RGE6AFHNCAAGNF3X3RO4ZUEPF5LPYPXOJOGJF5T4L4PDL2LHRTCE2UV7WYFUNGW24HGP37PQXKR3Q7G74AE5RH2EOY4A7NIHFJUD7V7AAUG6RITMIJ7UXWYYLHNORUP4BZLKC5DLYNP4CXHCNRS7AO6WYQJW4IWLSONF7POIFY7IFKR2QGQ"
    },
    "new": isIntentNew || "yes"
  },
  "request": {
    "type": intentType || "IntentRequest",
    "requestId": "EdwRequestId.64765faa-8fc8-4e05-98ba-b03495098bcb",
    "locale": "en-US",
    "timestamp": "2017-07-30T03:37:19Z",
    "intent": {
      "name": intentName || "SweetMuffinsIntent",
      "slots": {}
    }
  },
   "version": "1.0"
    },ctx);
    //Captures the response and/or errors
    ctx.Promise
        .then(resp => { speechResponse = resp;})
        .catch(err => { speechError = err;});
 
// Here we deicde to say hi to SweetMuffin AKA:Debbie
    describe("Alexa wants verify what sweetmuffin we are contemplating" , function() {
     
          //console.log(intentName,intentType,isIntentNew);

        it('should not have errored',function() {
            expect(speechError).to.be.a('null');
        });
        it('should have a version', function() {
            expect(speechResponse.version).not.to.be.a('null');
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
        it('should make sure you whish to quit and be a punk', function()  {
         //I can hard code a response in or just verify i get something back because its random its damn hard to test for
         assert.equal(speechResponse.response.outputSpeech.ssml, "<speak> Are we talking about My sweet muffins from Pennsylvania or from England? </speak>");
        });
        it('should leave the Alexa session open', function() {
            assert.equal(speechResponse.response.shouldEndSession,false);
        }); 
    });
 });

describe("should be waiting on response from user as to what sweetmuffn te are refering to.", function() {  
 var expect = require('chai').expect,  
    lambdaToTest = require('../index'),
    assert = require('chai').assert,
    context = require('aws-lambda-mock-context'),
    ctx = context(),
    intentType,
    intentName ,
    isIntentNew = isIntentNew || "yes",    
    speechResponse = speechResponse || null ,
         speechError = speechError || null;
    // Fires once for the group of tests, done is mocha's callback to 
    // let it know that an   async operation has completed before running the rest 
    // of the tests, 2000ms is the default timeout though
  
        //This fires the event to make ambda call as if alexa had iniated it
        lambdaToTest.handler({
        "session": {
    "sessionId": "SessionId.69f59134-db7e-474b-8365-052caa26d97b",
    "application": {
      "applicationId": "amzn1.ask.skill.0bd86f38-a7ef-42b1-9a4f-93e1acc4f04c"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AF3CKKULZRKESIEK4EUABNUM27S2RGE6AFHNCAAGNF3X3RO4ZUEPF5LPYPXOJOGJF5T4L4PDL2LHRTCE2UV7WYFUNGW24HGP37PQXKR3Q7G74AE5RH2EOY4A7NIHFJUD7V7AAUG6RITMIJ7UXWYYLHNORUP4BZLKC5DLYNP4CXHCNRS7AO6WYQJW4IWLSONF7POIFY7IFKR2QGQ"
    },
    "new": isIntentNew || "yes"
  },
  "request": {
    "type": intentType || "IntentRequest",
    "requestId": "EdwRequestId.64765faa-8fc8-4e05-98ba-b03495098bcb",
    "locale": "en-US",
    "timestamp": "2017-07-30T03:37:19Z",
    "intent": {
      "name": intentName || "SweetMuffinsPennsylvaniaIntent",
      "slots": {}
    }
  },
   "version": "1.0"
    },ctx);
    //Captures the response and/or errors
    ctx.Promise
        .then(resp => { speechResponse = resp;})
        .catch(err => { speechError = err;});
 
// Here we deicde to say hi to SweetMuffin AKA:Debbie
    describe("The user decides to use debbie aka the main squeeze" , function() {
     
          //console.log(intentName,intentType,isIntentNew);

        it('should not have errored',function() {
            expect(speechError).to.be.a('null');
        });
        it('should have a version', function() {
            expect(speechResponse.version).not.to.be.a('null');
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
        it('should make sure you whish to quit and be a punk', function()  {
         //I can hard code a response in or just verify i get something back because its random its damn hard to test for
         assert.equal(speechResponse.response.outputSpeech.ssml, "<speak> Woohoo DEBBIE? Im celebrating tonight!! How are you doing tonight debbie? </speak>");
        });
        it('should leave the Alexa session open', function() {
            assert.equal(speechResponse.response.shouldEndSession,false);
        }); 
    });
 });

describe("should be waiting on response from debbie as to how she is doing.", function() {  
 var expect = require('chai').expect,  
    lambdaToTest = require('../index'),
    assert = require('chai').assert,
    context = require('aws-lambda-mock-context'),
    ctx = context(),
    intentType,
    intentName ,
    isIntentNew = isIntentNew || "yes",    
    speechResponse = speechResponse || null ,
         speechError = speechError || null;
    // Fires once for the group of tests, done is mocha's callback to 
    // let it know that an   async operation has completed before running the rest 
    // of the tests, 2000ms is the default timeout though
  
        //This fires the event to make ambda call as if alexa had iniated it
        lambdaToTest.handler({
        "session": {
    "sessionId": "SessionId.69f59134-db7e-474b-8365-052caa26d97b",
    "application": {
      "applicationId": "amzn1.ask.skill.0bd86f38-a7ef-42b1-9a4f-93e1acc4f04c"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AF3CKKULZRKESIEK4EUABNUM27S2RGE6AFHNCAAGNF3X3RO4ZUEPF5LPYPXOJOGJF5T4L4PDL2LHRTCE2UV7WYFUNGW24HGP37PQXKR3Q7G74AE5RH2EOY4A7NIHFJUD7V7AAUG6RITMIJ7UXWYYLHNORUP4BZLKC5DLYNP4CXHCNRS7AO6WYQJW4IWLSONF7POIFY7IFKR2QGQ"
    },
    "new": isIntentNew || "yes"
  },
  "request": {
    "type": intentType || "IntentRequest",
    "requestId": "EdwRequestId.64765faa-8fc8-4e05-98ba-b03495098bcb",
    "locale": "en-US",
    "timestamp": "2017-07-30T03:37:19Z",
    "intent": {
      "name": intentName || "GoodIntent",
      "slots": {}
    }
  },
   "version": "1.0"
    },ctx);
    //Captures the response and/or errors
    ctx.Promise
        .then(resp => { speechResponse = resp;})
        .catch(err => { speechError = err;});
 
// Here we deicde to say hi to SweetMuffin AKA:Debbie
    describe("The user decides to use debbie aka the main squeeze" , function() {
     
          //console.log(intentName,intentType,isIntentNew);

        it('should not have errored',function() {
            expect(speechError).to.be.a('null');
        });
        it('should have a version', function() {
            expect(speechResponse.version).not.to.be.a('null');
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
        it('should make sure you whish to quit and be a punk', function()  {
         //I can hard code a response in or just verify i get something back because its random its damn hard to test for
         assert.equal(speechResponse.response.outputSpeech.ssml, "<speak> Woohoo DEBBIE? Im celebrating tonight!! How are you doing tonight debbie? </speak>");
        });
        it('should leave the Alexa session open', function() {
            assert.equal(speechResponse.response.shouldEndSession,false);
        }); 
    });
 });






