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
  "line": 19,
  "name": "Test Google Application Regression",
  "description": "",
  "id": "test-google-application-regression",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 35,
  "name": "Test Search Page",
  "description": "",
  "id": "test-google-application-regression;test-search-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@Regression2"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "Open IE and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I enter search value as \"\u003csearchvalue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "click search button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I need to see search results",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "test-google-application-regression;test-search-page;",
  "rows": [
    {
      "cells": [
        "searchvalue"
      ],
      "line": 43,
      "id": "test-google-application-regression;test-search-page;;1"
    },
    {
      "cells": [
        "createorder"
      ],
      "line": 44,
      "id": "test-google-application-regression;test-search-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 44,
  "name": "Test Search Page",
  "description": "",
  "id": "test-google-application-regression;test-search-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@Regression2"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "Open IE and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I enter search value as \"createorder\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "click search button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I need to see search results",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.Open_IE_and_start_application()"
});
formatter.result({
  "duration": 5608500056,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "createorder",
      "offset": 25
    }
  ],
  "location": "SmokeTest.i_enter_search_value_as(String)"
});
formatter.result({
  "duration": 2272143,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.click_search_button()"
});
formatter.result({
  "duration": 16352,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.I_need_to_see_search_results()"
});
formatter.result({
  "duration": 12226,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.close_the_browser()"
});
formatter.result({
  "duration": 119819188,
  "status": "passed"
});
formatter.uri("smoke.feature");
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
  "line": 19,
  "name": "Test Google Application Smoke",
  "description": "",
  "id": "test-google-application-smoke",
  "keyword": "Feature"
});
});