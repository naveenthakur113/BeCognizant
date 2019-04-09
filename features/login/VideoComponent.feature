Feature: Video component verification 

Scenario: Verify Video Play/Pause on the home page 
	When Enter url "https://www.thomsonreuters.in" 
	And Scroll to the Video component 
	And Click on Play 
	Then verify if the video is playing