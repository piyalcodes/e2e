// Next step, execute the second test case using the same url
//https://marmelab.com/blog/2016/04/19/e2e-testing-with-node-and-es6.html
//https://www.sitepoint.com/how-to-test-your-javascript-with-selenium-webdriver-and-mocha/

// Load dependecies
var assert = require('chai').assert,
	test = require('selenium-webdriver/testing'),
	webdriver = require('selenium-webdriver');
	
		var driver = new webdriver.Builder().
	withCapabilities(webdriver.Capabilities.chrome()).
	build();	
	

// Our test
test.describe('Test', function () {
	test.it('Loadin page loaded', function () {
	// Set timeout to 10 seconds
	this.timeout(40000); 

	// Go to URL
	driver.get('http://administration.dev.studyportals.eu:8846');
	//driver.get('http://the-internet.herokuapp.com');

	// Find title and assert
	driver.executeScript('return document.title').then(function(return_value) {	
		assert.equal(return_value, 'Welcome - Home - University Administration')
	});

	// Quit webdriver
	//driver.quit();
	});
	
	test.it('Loadin sucess to uniadmin', function () {
		// Set timeout to 10 seconds
		
	 

		// Go to URL
		driver.findElement(By.id("Username")).sendKeys("Piyal Darshana");
		driver.findElement(By.id("Password")).sendKeys("test");
		driver.findElement(By.cssSelector("ladda-button")).click();

		this.timeout(40000);
		
		// Find title and assert
		driver.executeScript('return document.title').then(function(return_value) {	
			assert.equal(return_value, 'Dashboard - University Administration')
		});

		// Quit webdriver
		driver.quit();
	});
});