package steps;


import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import util.Driver;


import java.util.concurrent.TimeUnit;

public class Hooks {


    @Before
    public void setUp(Scenario scenario){

        //System.out.println("setUp Çalıştı.");
        Driver.get().manage().window().maximize();
        Driver.get().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);

     scenario.write(scenario.getName() + " is executing now");

        System.out.println("setUp ...");

    }


    @After
    public void tearDown(Scenario scenario){
        System.out.println( "   Scenario is executed     :  "+scenario.getName());
        scenario.write(scenario.getName()+ " is executed");
        final byte[] screenshot = ((TakesScreenshot) Driver.get()).getScreenshotAs(OutputType.BYTES);
        if(scenario.isFailed()){
            scenario.embed(screenshot , "image/png");
        }


        Driver.close();

    }



}



