/**
 * 
 */
/**
 * @author KhanhVT1
 *
 */
package cucumberJava; 

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When; 

public class cucumberLogin { 
   WebDriver driver = null; 
	
   @Given("^I have open the browser$") 
   public void openBrowser() {
	   System.setProperty("webdriver.chrome.driver", "C:\\chromedriver.exe");
      driver = new ChromeDriver(); 
   } 
	
   @When("^I open PFW website$") 
   public void goToPFW() { 
      driver.navigate().to("https://pfw-uat1.neopost-id.com/"); 
   } 
   
   @When("^I enter username as firstUser$")
   public void i_enter_username_as_firstUser() {
   		driver.findElement(By.name("login:username")).sendKeys("PFW_CYB01");
       }
       
   @When("^I enter password as passWord$")
   public void i_enter_password_as_password() {
   		driver.findElement(By.name("login:password")).sendKeys("PFW_CUST01");
   	}
   
   @When("^I click Login button$")
   public void i_click_login_button() {
   		driver.findElement(By.className("button")).click();
   	}
   @Then("^Login success$")
   public void Login_success() {
		if (driver.getCurrentUrl().equalsIgnoreCase("https://pfw-uat1.neopost-id.com/admin_shprloc_lists.epl")) {
			System.out.println("Test Pass");
		} else {
			System.out.println("Test Failed");
		}
	}
   
}