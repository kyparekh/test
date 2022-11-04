Feature: Easyfundraising Search Functionality

  Scenario Outline:User should able to Search Cause
    Given I am on Home Page
    When I Click on I Accept cookie
    And I Click on Find a cause tab
    And I verify that "Explore our list of charities and good causes to choose the one you want to support" message is display
    And I Enter any "<3Characters>" in the Search Field
    And I Select "<3Cause>" from the Suggestion List
    And I Click Search Cause
    Then I Should verify "cause" is display on page
    Examples:
      | 3Characters | 3Cause |
      |adh         |ADHD Foundation|
      |0ttt         |               |






