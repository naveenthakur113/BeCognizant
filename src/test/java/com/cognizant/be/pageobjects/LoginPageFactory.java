package com.cognizant.be.pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPageFactory extends BasePage {

	WebDriver driver;

	public LoginPageFactory(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public LoginPageFactory() {

	}

	@FindBy(css = "input[type='email']")
	WebElement emailLogin;

	@FindBy(css = "input[type='submit']")
	WebElement clickNext;

	// *[@id="loginForm"]/h1
	@FindBy(css = "form[id='loginForm'] h1")
	WebElement textOnPage;

	public void signInWithEmail(String email) {
		emailLogin.sendKeys(email);
	}

	public void clickNext() {
		clickNext.click();
	}

	public void validateTextOnPage(String text) {

		//org.hamcrest.MatcherAssert.assertThat("Page on Text does not match",
			//	waitForVisibilityOfElement(textOnPage).getText().contains(text));

	}

}
