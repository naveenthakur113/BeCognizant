package com.cognizant.be.utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Driver {
	
	public static WebDriver driver;
	public static void initializeDriver(String browserType) {
	
		switch (browserType.toLowerCase()) {
		case "chrome":
		default:
			System.setProperty("webdriver.chrome.driver", "C:\\Selenium_Files\\chromedriver_win32\\chromedriver.exe");			
			driver = new ChromeDriver();			
			break;

		
		}
		
		
		
		
	}
	public static WebDriver getDriver() {
		return driver;
	}
	

}
