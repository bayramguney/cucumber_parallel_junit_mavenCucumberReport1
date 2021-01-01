$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/a.feature");
formatter.feature({
  "name": "Amazon",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Amazona gider",
  "description": "",
  "keyword": "Scenario"
});
formatter.write("Amazona gider is executing now");
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "go to the web page \"https://www.amazon.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.goToTheWebPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Amazona gider is executed");
formatter.after({
  "status": "passed"
});
formatter.uri("features/b.feature");
formatter.feature({
  "name": "Youtube",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Youtubea gider",
  "description": "",
  "keyword": "Scenario"
});
formatter.write("Youtubea gider is executing now");
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "go to the web page \"https://www.youtube.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.goToTheWebPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Youtubea gider is executed");
formatter.after({
  "status": "passed"
});
formatter.uri("features/c.feature");
formatter.feature({
  "name": "Google",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Google a gider",
  "description": "",
  "keyword": "Scenario"
});
formatter.write("Google a gider is executing now");
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "go to the web page \"https://www.google.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.goToTheWebPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Google a gider is executed");
formatter.after({
  "status": "passed"
});
formatter.uri("features/d.feature");
formatter.feature({
  "name": "Fanatik",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "fanatik gider",
  "description": "",
  "keyword": "Scenario"
});
formatter.write("fanatik gider is executing now");
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "go to the web page \"https://www.fanatik.com.tr/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.goToTheWebPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.write("fanatik gider is executed");
formatter.after({
  "status": "passed"
});
formatter.uri("features/e.feature");
formatter.feature({
  "name": "Fotomac",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Fotomac a gider",
  "description": "",
  "keyword": "Scenario"
});
formatter.write("Fotomac a gider is executing now");
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "go to the web page \"https://www.fotomac.com.tr/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.goToTheWebPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Fotomac a gider is executed");
formatter.after({
  "status": "passed"
});
});