Feature: This feature will test the login functionality 


Scenario Outline: Login with valid cognizant email address 
	Given Open browser 
	When Enter the url "https://be.cognizant.com/" 
	And Enter a valid Cognizant Email address "<cognizant-email>"
	And Click on Next 
	Then Land to Sign-In with id password page
	Examples:
	|cognizant-email|
	|ThakurNaveenKishore.Singh@cognizant.com|
	
	
