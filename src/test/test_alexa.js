/* jslint node: true */
/* jshint esnext: true */
/* eslint-env es6 */
require('commander');
//Starts off making sure we can hang with Alexa, as she is a bad ass
describe("Tests for Whose Shot, is it anyway?", function() {  
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
        lambdaToTest.handler(
										{
												"session": {
														"new": true,
														"sessionId": "SessionId.a77f057c-94fb-4bcb-abee-c58acba11f8a",
														"application": {
																"applicationId": "amzn1.ask.skill.cea43b8e-6d61-4fe6-a54b-fbcdce86a85f"
														},
														"attributes": {},
														"user": {
																"userId": 			"amzn1.ask.account.AETUVRBEUZJC57A44724CLQ6JKH3PBTE6BBEQZW2AYUZRNBDI3ZGLVLIU6TLXJV57FSIM5PZ2LTRUKHKEIWDGGATZDZVJFTO73AW44DU5I7BMZ6VTKV3LO5LSK7QEAUMCGAMSRH5Q42TCNEFM6U4VCSVMXMAZIYDCVKN5DVBRZXVGU3TXUAC7QP7K4XDYJ6NSJ6XAWDVITC6SUY"
														}
												},
												"request": {
														"type": "LaunchRequest",
														"requestId": "EdwRequestId.1754fa3f-86a2-4a13-9dca-071d922f38a9",
														"intent": {
																"name": "LaunchRequest",
																"slots": {}
														},
														"locale": "en-US",
														"timestamp": "2017-11-17T01:17:54Z"
												},
												"context": {
														"AudioPlayer": {
																"playerActivity": "IDLE"
														},
														"System": {
																"application": {
																		"applicationId": "amzn1.ask.skill.cea43b8e-6d61-4fe6-a54b-fbcdce86a85f"
																},
																"user": {
																		"userId": 	"amzn1.ask.account.AETUVRBEUZJC57A44724CLQ6JKH3PBTE6BBEQZW2AYUZRNBDI3ZGLVLIU6TLXJV57FSIM5PZ2LTRUKHKEIWDGGATZDZVJFTO73AW44DU5I7BMZ6VTKV3LO5LSK7QEAUMCGAMSRH5Q42TCNEFM6U4VCSVMXMAZIYDCVKN5DVBRZXVGU3TXUAC7QP7K4XDYJ6NSJ6XAWDVITC6SUY"
																},
																"device": {
																		"supportedInterfaces": {}
																}	
														}
												},
												"version": "1.0"
										},
										ctx
								);
    //Captures the response and/or errors
		ctx.Promise
				.then(resp => { speechResponse = resp;})
				.catch(err => { speechError = err;});
 
// The initial launch of our Alexa app
    describe('Should launch skill giving a random person and a shot name', function() {
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
        it('should close the Alexa session', function() {
            expect(speechResponse.response.shouldEndSession).not.to.be.null,
            expect(speechResponse.response.shouldEndSession).to.be.true;
        }); 
          //We have now successfully launched our skill, with everything coming back correctly in all formats
    });
 });