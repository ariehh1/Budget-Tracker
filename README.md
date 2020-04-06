# [Budget-Tracker](https://aqueous-eyrie-65339.herokuapp.com/)

In this repository, I have built a Budget Tracker application utilizing IndexedDb. The main focus of this unit was Progressive Web Applications (PWA's) and this application allows for online/offline access and functionality. The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.

<h1>Overview:</h1>
In order to develop this application further, I started with the code in our previous Budget Tracker application. This starter code only consisted of the front-end layout, server, and routes for the application. The goal was to develop a service worker (to cache our static assets) and provide a webmanifest (all information stored about the PWA). This application is also installable from your browser just like Google Maps for example.

<h1>User Story:</h1>
<li>AS AN avid traveller</li>
<li>I WANT to be able to track my withdrawals and deposits with or without a data/internet connection</li>
<li>SO THAT my account balance is accurate when I am traveling</li>

<h1>Business Context:</h1>
Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success.

<h1>Technologies Used:</h1>
<li>IndexedDB - (https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)</li>
<li>Webmanifest - (https://developer.mozilla.org/en-US/docs/Web/Manifest)</li>
<li>Progressive Web Apps - (https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)</li>
<li>Google Offline Cookbook - (https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook)</li>

<h1>Setup Before Deployment:</h1>
<li>Clone the repository on your local device and open Terminal or Bash</li>
<li>In Terminal or Bash, the user will run the following command to download all application dependencies: "npm install"</li>
<li>In Terminal or Bash, the user will run the following command to run the application: "npm run start"</li>
<li>Once the command is run, a successful message will appear "App running on http://localhost:3000"</li>
<li>In your browser, type "http://localhost:3000/"</li>

<h1>Demo of Application:</h1>
Please watch the below link for a demo of the Budget Tracker:
https://drive.google.com/file/d/13H7qSRf__kj8hj5s_3P1Cnh86qXZ3yGH/view

<h1>Future Development:</h1>
If I were to continue developing this application further, I would start building in functionality around app security and verification. As budget tracking is sensitive information, there should be measures put in place to verify user input. When the budget falls below a certain threshold for the user, an alert can provide that warning. Also, when the budget increases to a certain threshold for the user, an alert can provide suggestions to start putting that money in savings. A user password before logging into the application would also provide an added layer of security detection.

<h1>Heroku Link:</h1>
https://aqueous-eyrie-65339.herokuapp.com/

<h1>Contact Me:</h1>
@ariehh1 - https://github.com/ariehh1
