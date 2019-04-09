package com.cognizant.be.pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.cognizant.be.utils.Driver;

public class BasePage {
	
	
	private WebDriverWait wait= new WebDriverWait(Driver.getDriver(), 30);
	
	public WebElement waitForVisibilityOfElement(WebElement element) {
		return wait.until(ExpectedConditions.visibilityOf(element));
	}

}
