#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
Feature: Test Google Application Regression

  @Regression1, @wip
  Scenario Outline: Test Search Page
    Given Open IE and start application
    When I enter search value as "<searchvalue>"
    And click search button
    Then I need to see search results
    Then close the browser

    Examples: 
      | searchvalue |
      | test        |
      | hi          |

  @Regression2
  Scenario Outline: Test Search Page
    Given Open IE and start application
    When I enter search value as "<searchvalue>"
    And click search button
    Then I need to see search results
    Then close the browser

    Examples: 
      | searchvalue |
      | createorder |

  @Regression3, @wip
  Scenario Outline: Test Search Page
    Given Open IE and start application
    When I enter search value as "<searchvalue>"
    And click search button
    Then I need to see search results
    Then close the browser

    Examples: 
      | searchvalue |
      | deleteorder |
