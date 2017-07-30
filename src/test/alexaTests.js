var expect = require('chai').expect,  
    lambdaToTest = require('../index'),
    assert = require('chai').assert,
    context = require('aws-lambda-mock-context'),
    ctx = context(),
    intentType = '',
    intentName = '',
    isIntentNew = '';

describe("Did Let's get drunk start and Alexa engage you with a question?", function() {  
     var speechResponse = null,
         speechError = null;
    // Fires once for the group of tests, done is mocha's callback to 
    // let it know that an   async operation has completed before running the rest 
    // of the tests, 2000ms is the default timeout though
    before(function(done){
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
    "new": isIntentNew
  },
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
        it('should speak out loud asking us if we can handle it?', function()  {
         assert.equal(speechResponse.response.outputSpeech.ssml, '<speak> Sounds good, but are you sure you can handle it? </speak>');
        });
        it('should leave the Alexa session open', function() {
            expect(speechResponse.response.shouldEndSession).not.to.be.null,
            expect(speechResponse.response.shouldEndSession).to.be.false;
        }); 
          //We have now successfully launched our skill, with everything coming back correctly in all formats
    });
 
//    describe('should be waiting on user response after having just asked if we can handle her ', function() {
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

//    describe('if shots were picked should return a random person and a shot for that person to drink.', function() {
//        it('should not have errored',function() {
//        expect(speechError).to.be.null;
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
//     
//    });
});