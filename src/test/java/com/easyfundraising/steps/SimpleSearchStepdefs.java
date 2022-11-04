package com.easyfundraising.steps;

import com.easyfundraising.pages.SimpleSearchPageObject;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;


public class SimpleSearchStepdefs {
    @Given("^I am on Home Page$")
    public void iAmOnHomePage() {

    }

    @When("^I Click on I Accept cookie$")
    public void iClickOnIAcceptCookie() {
        new SimpleSearchPageObject().clickOnCookies();
    }

    @And("^I Click on Find a cause tab$")
    public void iClickOnFindACauseTab() {
        new SimpleSearchPageObject().clickOnFindCauase();
    }

    @And("^I verify that \"([^\"]*)\" message is display$")
    public void iVerifyThatMessageIsDisplay(String arg0) {
        Assert.assertEquals(new SimpleSearchPageObject().navfindcause(), "Explore our list of charities and good causes to choose the one you want to support");

    }

    @And("^I Enter any \"([^\"]*)\" in the Search Field$")
    public void iEnterAnyInTheSearchField(String text)  {
        new SimpleSearchPageObject().sendCauseText(text);
    }

    @And("^I Select \"([^\"]*)\" from the Suggestion List$")
    public void iSelectFromTheSuggestionList(String text) {
        new SimpleSearchPageObject().sendCauseSearchField(text);
    }

    @And("^I Click Search Cause$")
    public void iClickSearchCause() {
        new SimpleSearchPageObject().clickOnSearchButton();
    }

    @Then("^I Should verify \"([^\"]*)\" is display on page$")
    public void iShouldVerifyIsDisplayOnPage(String text)  {
        Assert.assertTrue(new SimpleSearchPageObject().causeDisplay().contains(text));
    }
}