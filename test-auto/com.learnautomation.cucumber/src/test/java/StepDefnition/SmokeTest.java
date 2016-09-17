package StepDefnition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.firefox.internal.ProfilesIni;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.junit.Assert.*;


public class SmokeTest {

	WebDriver driver;

@Given("^Open IE and start application$")
public void Open_IE_and_start_application() throws Throwable {
    // Express the Regexp above with the code you wish you had
 
		
	//System.setProperty("webdriver.gecko.driver", "/home/vinod/Softwares/geckodriver.exe");
	System.setProperty("webdriver.chrome.driver", "/home/vinod/Softwares/chromedriver");

	//Now you can Initialize marionette driver to launch firefox
	DesiredCapabilities capabilities = DesiredCapabilities.chrome();
	capabilities.setCapability("marionette", true);

	
	/*ProfilesIni allProfiles = new ProfilesIni();
	FirefoxProfile myProfile = allProfiles.getProfile("default");
	myProfile.setAcceptUntrustedCertificates(true);
	myProfile.setAssumeUntrustedCertificateIssuer(true);*/
	
		
	//driver1 = new InternetExplorerDriver(ieCapabilities);
	//driver = new FirefoxDriver(capabilities);
	driver = new ChromeDriver();

	driver.manage().window().maximize();
    driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);

    
//driver.get("https://www.google.com/");
    driver.get("http://172.17.0.1:8080/movieplex7");
	driver.findElement(By.linkText("Book a movie")).click();
	Thread.sleep(1000);
	driver.findElement(By.linkText("Chat Room")).click();
	Thread.sleep(1000);
	driver.findElement(By.linkText("Movies")).click();
	Thread.sleep(1000);
	driver.findElement(By.linkText("Sales")).click();
    

}
@When("^I enter search value as \"(.*?)\"$")
public void i_enter_search_value_as(String srch) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	//driver.findElement(By.xpath("//input[@type='text']")).sendKeys(srch);
	
	//fail("testnotimplemented");

}



@When("^I enter search value$")
public void I_enter_search_value() throws Throwable {
    // Express the Regexp above with the code you wish you had
	//driver.findElement(By.xpath("//input[@type='text']")).sendKeys("Test");

}

@When("^click search button$")
public void click_search_button() throws Throwable {
    // Express the Regexp above with the code you wish you had
//driver.findElement(By.name("btnK"));
}

@Then("^I need to see search results$")
public void I_need_to_see_search_results() throws Throwable {
    // Express the Regexp above with the code you wish you had

}

@Then("^close the browser$")
public void close_the_browser() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    driver.close();
}

}
