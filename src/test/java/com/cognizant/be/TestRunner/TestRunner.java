package com.cognizant.be.TestRunner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.cognizant.be.utils.Driver;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		monochrome=true,
		dryRun=false,
		features="features",
		glue="com/cognizant/be/stepdefs",
		plugin = {
			"pretty", 
			"html:reports/html", 
			"json:reports/json/cucumber.json","junit:reports/xml/cucumber.xml"
		},

		tags="not @ignore")



public class TestRunner {

	@BeforeClass
	public static void setUp() {
		System.out.println("Setup method of junit runner");
		Driver.initializeDriver("chrome");
	}
	
	@AfterClass
	public static void tearDown() {
		System.out.println("Tear down method of junit runner");
		Driver.getDriver().quit();
	}
	
}
