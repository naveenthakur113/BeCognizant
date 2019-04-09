package com.cognizant.be.stepdefs;

import com.cognizant.be.pageobjects.LoginPageFactory;
import com.cognizant.be.utils.Driver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login {

	public LoginPageFactory factory = new LoginPageFactory(Driver.getDriver());

	@Given("Open browser")
	public void open_browser() {

	}

	@When("Enter the url {string}")
	public void enter_the_url(String url) {
		Driver.getDriver().get(url);
	}

	@When("Enter a valid Cognizant Email address {string}")
	public void enter_a_valid_Cognizant_Email_address(String email) {
		factory.signInWithEmail(email);

	}

	@When("Click on Next")
	public void click_on_Next() {
		factory.clickNext();
		// Driver.getDriver().findElement(By.cssSelector("input[type='submit']")).click();
	}

	@Then("Land to Sign-In with id password page")
	public void land_to_Sign_In_with_id_password_page() {

	/*	try {
			Thread.sleep(8000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
*/
		factory.validateTextOnPage("Sign in to Cognizant");

	}

}
