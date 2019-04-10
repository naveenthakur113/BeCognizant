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
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BBA5BS9\u0027, ip: \u0027192.168.0.14\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\navee\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:51111}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 4294ba9d4abda9d0846ee3c7c9cd7f8e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.cognizant.be.stepdefs.Login.enter_the_url(Login.java:21)\r\n\tat ✽.Enter the url \"https://be.cognizant.com/\"(file:features/login/login.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Enter a valid Cognizant Email address \"ThakurNaveenKishore.Singh@cognizant.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.enter_a_valid_Cognizant_Email_address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Next",
  "keyword": "And "
});
formatter.match({
  "location": "Login.click_on_Next()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Land to Sign-In with id password page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.land_to_Sign_In_with_id_password_page()"
});
formatter.result({
  "status": "skipped"
});
});