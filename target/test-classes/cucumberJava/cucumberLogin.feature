Feature: CucumberLogin

Scenario: Login success

Given I have open the browser

When I open PFW website
And I enter username as firstUser
And I enter password as passWord
And I click Login button

Then Login success