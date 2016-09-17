package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="Features",glue="StepDefnition",
plugin={"pretty","html:target/cucumber","json:C:\\Users\\Balaji\\.jenkins\\workspace\\CucumberSelenium\\target\\cucumber.json"}
,tags = {"~@wip"})
public class TestRunner1 {

	
	
}
