$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('cucumberJava\cucumberLogin.feature');
formatter.feature({
  "line": 1,
  "name": "CucumberJava",
  "description": "",
  "id": "cucumberjava",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login success",
  "description": "",
  "id": "cucumberjava;login-success",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I open PFW website",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter username as firstUser",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter password as passWord",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Login success",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberLogin.openBrowser()"
});
formatter.result({
  "duration": 3239194124,
  "status": "passed"
});
formatter.match({
  "location": "cucumberLogin.goToPFW()"
});
formatter.result({
  "duration": 26373345254,
  "status": "passed"
});
formatter.match({
  "location": "cucumberLogin.i_enter_username_as_firstUser()"
});
formatter.result({
  "duration": 141819416,
  "status": "passed"
});
formatter.match({
  "location": "cucumberLogin.i_enter_password_as_password()"
});
formatter.result({
  "duration": 95123729,
  "status": "passed"
});
formatter.match({
  "location": "cucumberLogin.i_click_login_button()"
});
formatter.result({
  "duration": 7895524389,
  "status": "passed"
});
formatter.match({
  "location": "cucumberLogin.Login_success()"
});
formatter.result({
  "duration": 15265930,
  "status": "passed"
});
});