$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyApplication.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Test Google APplication",
  "description": "",
  "id": "test-google-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Test Search Page",
  "description": "",
  "id": "test-google-application;test-search-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Open IE and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I enter search value as \"\u003csearchvalue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "click search button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I need to see search results",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "test-google-application;test-search-page;",
  "rows": [
    {
      "cells": [
        "searchvalue"
      ],
      "line": 31,
      "id": "test-google-application;test-search-page;;1"
    },
    {
      "cells": [
        "test"
      ],
      "line": 32,
      "id": "test-google-application;test-search-page;;2"
    },
    {
      "cells": [
        "hi"
      ],
      "line": 33,
      "id": "test-google-application;test-search-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "Test Search Page",
  "description": "",
  "id": "test-google-application;test-search-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 22,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Open IE and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I enter search value as \"test\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "click search button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I need to see search results",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.Open_IE_and_start_application()"
});
formatter.result({
  "duration": 10083867688,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 25
    }
  ],
  "location": "SmokeTest.i_enter_search_value_as(String)"
});
formatter.result({
  "duration": 143776049,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.click_search_button()"
});
formatter.result({
  "duration": 20735240,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.I_need_to_see_search_results()"
});
formatter.result({
  "duration": 29935,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.close_the_browser()"
});
formatter.result({
  "duration": 5234487,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Test Search Page",
  "description": "",
  "id": "test-google-application;test-search-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 22,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Open IE and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I enter search value as \"hi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "click search button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I need to see search results",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.Open_IE_and_start_application()"
});
formatter.result({
  "duration": 8468688873,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hi",
      "offset": 25
    }
  ],
  "location": "SmokeTest.i_enter_search_value_as(String)"
});
formatter.result({
  "duration": 65455037,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.click_search_button()"
});
formatter.result({
  "duration": 15035038,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.I_need_to_see_search_results()"
});
formatter.result({
  "duration": 27370,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.close_the_browser()"
});
formatter.result({
  "duration": 6239047,
  "status": "passed"
});
});