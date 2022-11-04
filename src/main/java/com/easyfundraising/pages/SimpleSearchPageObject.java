package com.easyfundraising.pages;

import com.easyfundraising.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class SimpleSearchPageObject extends Utility {
    private static final Logger log = LogManager.getLogger(SimpleSearchPageObject.class.getName());

    public SimpleSearchPageObject() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//button[text()='I accept']")
    WebElement cookies;
    public void clickOnCookies() {
        clickOnElement(cookies);
        log.info("Click on Cookies : " + cookies.toString());
    }

    @CacheLookup
    @FindBy(xpath = "//span[text()='Find a cause']")
    WebElement find;

    public void clickOnFindCauase() {
        clickOnElement(find);
        log.info("click on Find Cause : "+ find .toString());
    }

    @CacheLookup
    @FindBy(xpath = "//p[text()='Explore our list of charities and good causes to choose the one you want to support']")
    WebElement navpage;

    public String navfindcause() {
        String message = getTextFromElement(navpage);
        log.info("Getting text from : " + navpage.toString());
        return message;
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='sagc-hero-search-input']")
    WebElement sendcause;

    public void sendCauseText(String text) {
        sendTextToElement(sendcause, text);
        log.info("Enter Cause : " + sendcause.toString());
    }

    @CacheLookup
    @FindBy(xpath = "//ul[@id='sagc-hero-search-input-auto-suggest']/li[3]")
    List<WebElement> searchfield;

    public void sendCauseSearchField(String text) {
        for (WebElement webelement : searchfield) {
            if (webelement.getText().contains(text)){
                clickOnElement(webelement);
                log.info("Select Cause : " + searchfield.toString());
                break;
            }
        }
    }

    @CacheLookup
    @FindBy(xpath = "//span[text()='Search cause']")
    WebElement searchbutton;

    public void clickOnSearchButton() {
        clickOnElement(searchbutton);
        log.info("Click On Search : " + searchbutton.toString());

    }

    @CacheLookup
    @FindBy(xpath = "//h1[@class='typography-2xl font-v2-heavy my-v2-32']")
    WebElement verifycause;

    public String causeDisplay() {
        String message = getTextFromElement(verifycause);
        log.info("Getting Cause from : " + verifycause.toString());
        return message;
    }
}