var expect = require('chai').expect,  
lambdaToTest = require('../index'),
assert = require('chai').assert

var context = require('aws-lambda-mock-context');  
var ctx = context();


describe('Did Alexa ask you if you were sure?', function() {  
    var speechResponse = null
    var speechError = null
    
    // Fires once for the group of tests, done is mocha's callback to 
    // let it know that an   async operation has completed before running the rest 
    // of the tests, 2000ms is the default timeout though
    before(function(done){
        //This fires the event as if a Lambda call was being sent in
        lambdaToTest.handler({
        "session": {
    "sessionId": "SessionId.0419eba6-7310-4227-a0b5-6842b1d7bbff",
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
    "requestId": "EdwRequestId.82bbea78-e5fa-49b9-85d7-251b40865f1f",
    "locale": "en-US",
    "timestamp": "2017-07-27T09:30:02Z"
  },
  "version": "1.0"
    },ctx)

    //Captures the response and/or errors
    ctx.Promise
        .then(resp => { speechResponse = resp; done(); })
        .catch(err => { speechError = err; done();})
    })

//The poupose of this suite of tests
    describe('The response came back in the correct format to render into speech', function() {
   
        it('should not have errored',function() {
            expect(speechError).to.be.null
        })

        it('should have a version', function() {
            expect(speechResponse.version).not.to.be.null
        })

        it('should have a speechlet response', function() {
            expect(speechResponse.response).not.to.be.null
        })

        it('should have session attributes', function() {
            expect(speechResponse.response.sessionAttributes).not.to.be.null
        })

        it('should leave the Alexa session open', function() {
            expect(speechResponse.response.shouldEndSession).not.to.be.null
            expect(speechResponse.response.shouldEndSession).to.be.false
        })
        it('should tell us that in came back a SSML message type.', () => {
            assert.equal(speechResponse.response.outputSpeech.type, 'SSML');
        })
        it('should come back asking us if we can handle it', () => {
            assert.equal(speechResponse.response.outputSpeech.ssml, '<speak> Sounds good, but are you sure you can handle it? </speak>');
        });
        it('should leave the Alexa session open for an another answer after she asks you', function() {
            expect(speechResponse.response.shouldEndSession).not.to.be.null
            expect(speechResponse.response.shouldEndSession).to.be.false
        })
        
    })
})