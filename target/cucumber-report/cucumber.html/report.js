$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/simpleSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Easyfundraising Search Functionality",
  "description": "",
  "id": "easyfundraising-search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User should able to Search Cause",
  "description": "",
  "id": "easyfundraising-search-functionality;user-should-able-to-search-cause",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I Click on I Accept cookie",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I Click on Find a cause tab",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I verify that \"Explore our list of charities and good causes to choose the one you want to support\" message is display",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Enter any \"\u003c3Characters\u003e\" in the Search Field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Select \"\u003c3Cause\u003e\" from the Suggestion List",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Click Search Cause",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Should verify \"cause\" is display on page",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "easyfundraising-search-functionality;user-should-able-to-search-cause;",
  "rows": [
    {
      "cells": [
        "3Characters",
        "3Cause"
      ],
      "line": 13,
      "id": "easyfundraising-search-functionality;user-should-able-to-search-cause;;1"
    },
    {
      "cells": [
        "adh",
        "ADHD Foundation"
      ],
      "line": 14,
      "id": "easyfundraising-search-functionality;user-should-able-to-search-cause;;2"
    },
    {
      "cells": [
        "0ttt",
        ""
      ],
      "line": 15,
      "id": "easyfundraising-search-functionality;user-should-able-to-search-cause;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14507132000,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should able to Search Cause",
  "description": "",
  "id": "easyfundraising-search-functionality;user-should-able-to-search-cause;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I Click on I Accept cookie",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I Click on Find a cause tab",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I verify that \"Explore our list of charities and good causes to choose the one you want to support\" message is display",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Enter any \"adh\" in the Search Field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Select \"ADHD Foundation\" from the Suggestion List",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Click Search Cause",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Should verify \"cause\" is display on page",
  "keyword": "Then "
});
formatter.match({
  "location": "SimpleSearchStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 383816600,
  "status": "passed"
});
formatter.match({
  "location": "SimpleSearchStepdefs.iClickOnIAcceptCookie()"
});
formatter.result({
  "duration": 559960000,
  "status": "passed"
});
formatter.match({
  "location": "SimpleSearchStepdefs.iClickOnFindACauseTab()"
});
formatter.result({
  "duration": 3429697600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Explore our list of charities and good causes to choose the one you want to support",
      "offset": 15
    }
  ],
  "location": "SimpleSearchStepdefs.iVerifyThatMessageIsDisplay(String)"
});
formatter.result({
  "duration": 106858100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adh",
      "offset": 13
    }
  ],
  "location": "SimpleSearchStepdefs.iEnterAnyInTheSearchField(String)"
});
formatter.result({
  "duration": 454955800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADHD Foundation",
      "offset": 10
    }
  ],
  "location": "SimpleSearchStepdefs.iSelectFromTheSuggestionList(String)"
});
formatter.result({
  "duration": 659204000,
  "status": "passed"
});
formatter.match({
  "location": "SimpleSearchStepdefs.iClickSearchCause()"
});
formatter.result({
  "duration": 1161109800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cause",
      "offset": 17
    }
  ],
  "location": "SimpleSearchStepdefs.iShouldVerifyIsDisplayOnPage(String)"
});
formatter.result({
  "duration": 67048300,
  "status": "passed"
});
formatter.after({
  "duration": 1932461900,
  "status": "passed"
});
formatter.before({
  "duration": 7364581300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should able to Search Cause",
  "description": "",
  "id": "easyfundraising-search-functionality;user-should-able-to-search-cause;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I Click on I Accept cookie",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I Click on Find a cause tab",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I verify that \"Explore our list of charities and good causes to choose the one you want to support\" message is display",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Enter any \"0ttt\" in the Search Field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Select \"\" from the Suggestion List",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Click Search Cause",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Should verify \"cause\" is display on page",
  "keyword": "Then "
});
formatter.match({
  "location": "SimpleSearchStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 91500,
  "status": "passed"
});
formatter.match({
  "location": "SimpleSearchStepdefs.iClickOnIAcceptCookie()"
});
formatter.result({
  "duration": 825654300,
  "status": "passed"
});
formatter.match({
  "location": "SimpleSearchStepdefs.iClickOnFindACauseTab()"
});
formatter.result({
  "duration": 3830876200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Explore our list of charities and good causes to choose the one you want to support",
      "offset": 15
    }
  ],
  "location": "SimpleSearchStepdefs.iVerifyThatMessageIsDisplay(String)"
});
formatter.result({
  "duration": 149247400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0ttt",
      "offset": 13
    }
  ],
  "location": "SimpleSearchStepdefs.iEnterAnyInTheSearchField(String)"
});
formatter.result({
  "duration": 1073014400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 10
    }
  ],
  "location": "SimpleSearchStepdefs.iSelectFromTheSuggestionList(String)"
});
formatter.result({
  "duration": 20048864900,
  "status": "passed"
});
formatter.match({
  "location": "SimpleSearchStepdefs.iClickSearchCause()"
});
formatter.result({
  "duration": 1423945700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cause",
      "offset": 17
    }
  ],
  "location": "SimpleSearchStepdefs.iShouldVerifyIsDisplayOnPage(String)"
});
formatter.result({
  "duration": 20050201000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[@class\u003d\u0027typography-2xl font-v2-heavy my-v2-32\u0027]\"}\n  (Session info: chrome\u003d107.0.5304.88)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-SFJHI47\u0027, ip: \u0027192.168.0.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [0daa89dfaf64c42e36f3c399c8634af9, findElement {using\u003dxpath, value\u003d//h1[@class\u003d\u0027typography-2xl font-v2-heavy my-v2-32\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.88, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\Khushbu\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:56013}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:56013/devtoo..., se:cdpVersion: 107.0.5304.88, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0daa89dfaf64c42e36f3c399c8634af9\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.easyfundraising.utility.Utility.getTextFromElement(Utility.java:19)\r\n\tat com.easyfundraising.pages.SimpleSearchPageObject.causeDisplay(SimpleSearchPageObject.java:85)\r\n\tat com.easyfundraising.steps.SimpleSearchStepdefs.iShouldVerifyIsDisplayOnPage(SimpleSearchStepdefs.java:50)\r\n\tat ✽.Then I Should verify \"cause\" is display on page(src/test/java/resources/featurefile/simpleSearch.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2343165300,
  "status": "passed"
});
});