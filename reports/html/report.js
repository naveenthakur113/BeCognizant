$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/login/VideoComponent.feature");
formatter.feature({
  "name": "Video component verification",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify Video Play/Pause on the home page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Enter url \"https://www.thomsonreuters.in\"",
  "keyword": "When "
});
formatter.match({
  "location": "VideoComponent.enter_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Scroll to the Video component",
  "keyword": "And "
});
formatter.match({
  "location": "VideoComponent.scroll_to_the_Video_component()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Play",
  "keyword": "And "
});
formatter.match({
  "location": "VideoComponent.click_on_Play()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify if the video is playing",
  "keyword": "Then "
});
formatter.match({
  "location": "VideoComponent.verify_if_the_video_is_playing()"
});
formatter.result({
  "status": "passed"
});
});