package steps;

import cucumber.api.java.en.Given;

import util.Driver;


public class MyStepdefs {
    @Given("go to the web page {string}")
    public void goToTheWebPage(String arg0) {
        Driver.get().get(arg0);
    }


}
