package com.cognizant.be.stepdefs;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.sikuli.script.FindFailed;
import org.sikuli.script.Image;
import org.sikuli.script.Pattern;
import org.sikuli.script.Region;
import org.sikuli.script.Screen;

import com.cognizant.be.utils.Driver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class VideoComponent {

	@When("Enter url {string}")
	public void enter_url(String url) {
		// Write code here that turns the phrase above into concrete actions
		Driver.getDriver().get(url);
		Driver.getDriver().manage().window().maximize();
	}

	@When("Scroll to the Video component")
	public void scroll_to_the_Video_component() {

		WebElement videoComponent = Driver.getDriver()
				.findElement(By.xpath("//*[@id='body']/section[2]/div/div/div[2]/div"));
		JavascriptExecutor js = (JavascriptExecutor) Driver.getDriver();
		js.executeScript("arguments[0].scrollIntoView(true);", videoComponent);

	}

	@When("Click on Play")
	public void click_on_Play() throws FindFailed, IOException {
		// Write code here that turns the phrase above into concrete actions

		TakesScreenshot ts = (TakesScreenshot) Driver.getDriver();
		File source = ts.getScreenshotAs(OutputType.FILE);
		File target = new File(
				"C://NaveenData//SeleniumLearning//FrameworkFromScratch//BeCognizant//resources//screenshot.PNG");
		FileUtils.copyFile(source, target);

		Screen s = new Screen();
		Pattern pauseImg = new Pattern("C://NaveenData//SeleniumLearning//FrameworkFromScratch//BeCognizant//resources//screenshot.PNG");
		System.out.println("region highlight");
		s.wait(pauseImg, 3);
		s.click();
		s.click();
	}

	@Then("verify if the video is playing")
	public void verify_if_the_video_is_playing() {
		// Write code here that turns the phrase above into concrete actions

	}

}
