$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/login/login.feature");
formatter.feature({
  "name": "This feature will test the login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login with valid cognizant email address",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open browser",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter the url \"https://be.cognizant.com/\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter a valid Cognizant Email address \"\u003ccognizant-email\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click on Next",
  "keyword": "And "
});
formatter.step({
  "name": "Land to Sign-In with id password page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "cognizant-email"
      ]
    },
    {
      "cells": [
        "ThakurNaveenKishore.Singh@cognizant.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with valid cognizant email address",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.open_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the url \"https://be.cognizant.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.enter_the_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter a valid Cognizant Email address \"ThakurNaveenKishore.Singh@cognizant.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.enter_a_valid_Cognizant_Email_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Next",
  "keyword": "And "
});
formatter.match({
  "location": "Login.click_on_Next()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Land to Sign-In with id password page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.land_to_Sign_In_with_id_password_page()"
});
formatter.result({
  "status": "passed"
});
});