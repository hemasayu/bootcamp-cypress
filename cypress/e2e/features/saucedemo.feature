Feature: Login Saucedemo

    Scenario Outline: Login success
        Given I open Saucedemo website
        When I type "<username>" and "<Password>"
        And I click Login button
        Then I should see 'Products'

        Examples:
        |username     |password     |
        |standard_user|secret_sauce | 

    Scenario Outline: Login failed
        Given I open Saucedemo website
        When I type "<username>" and "<Password>"
        And I click Login button
        Then I should see words 'do not match'

        Examples:
        |username     |password     |
        |hemas        |secret_sauce |