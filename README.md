*****WORK IN PROGRESS , IT WORKS NOW BUT I'M CURRENTLY WORKING ON UPDATING TO MAKE MORE INTERACTIVE*****



# TakeaShot-AlexaSkill

This project was made using Node.js,JSON and an AWS Lambda to connect to Aexa's server, using the mocha testing framework we can ensure that the data we sent and recieved was correct and invoked the right Alexa custom skill(s)


To add this skill to your own Alexa

1. Download or clone the repo.

** Creating our Lambda **

2. Login to your AWS account.
   a. Go the Lambda services and choose N. Virgina as this is the only region the Alexa currently supports.
   b. Choose create a new lambda
   c.You can either choose blank or alexa-skill-kit-sdk-factskill
   d.Use a trigger to fire the lambda that will get called when you invoke Alexa, choose Alexa skills kit
   e.Give it a name and description
   f.Choose your run time as node 4.3
   g.For code entry type choose upload zip, and upload the shots.zip file you have from when you cloned/downloaded the repo
   h.Either choose a role that has Alexa permissions or make a role with the correct permissions
   i.Click next review everything and if it is what you want to see create your lambda function that will allow us to add it to Alexa.

** Adding our lambda to Alexa **

3.  Go to https://developer.amazon.com/alexa
    a.Under getting started Click create an Alexa skill now
    b.Login if needed
    c.Click add a new skill
    d.For skill type keep Custom Interaction Model clicked
    e.Give it a name for the store or just for your use.
    f.Give it an Invocation keyword this is what you say to Alexa to activate or run your skill For this example "take a shot" (without the quotes"
    g.Click next
    h.Use the sample Intent Schema I've provided from the repo to see what one looks like
    i.Custom Slot Types are optional so need to put anything in there for this skill.
    j.Give it a sample utterance to interact with your skill, make sure to start it with Takeashot or anything new you would like. 
        Ex: Takeashot tell us what to take
    k.Click next
    l.Choose AWS Lambda ARN for your end point,you can get this from the lambda function page you just created and copy and paste it
      in the provided area
    m. You can leave the rest of the setting how they are and click next
    n.You can test your new skill under Service simulator , enter your utterance "take a shot" (without the quotes) or by going to your alexa and saying "Alexa open take a shot" and it should tell you which one of my friends that has to take a shot. 
    o. Does it return a lambda response in valid Json format? if so great you can move on if not check out all your settings again and retry, checking both the setting in you lambda and in alexa as well as any premissons and roles.
    p. Now you can choose to either keep it to your self or publish it. I'll leave that to you


** Changing it to your friends and drink choices **

1. Open up shots.zip that you already have.
   a.open up index.js
   b.Change the shot type and people to who you want you know have a fun little party game to decides who is up next to take a shot:D
      *Note that there are 3 diffrent language types so that you can change up what is said based on what language they are using
   

   Play around a little and see what you can make it do.
 



 
