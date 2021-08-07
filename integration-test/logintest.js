const {Builder, By, Key, until} = require('selenium-webdriver'); 
var assert = require('assert');
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }
(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        // Navigate to Url
        await driver.get('http://localhost:3001');

        // Enter text "cheese" and perform keyboard action "Enter"
        await driver.findElement(By.id('floatingInput')).sendKeys('user1');
        await driver.findElement(By.id('floatingPassword')).sendKeys('password1', Key.ENTER);
        await driver.findElement(By.id('sign-in-button')).click();
        let visible = await driver.findElement(By.id('sign-out-button')).isDisplayed();
        assert(visible, true, "signout button is not visible");
        // let firstResult = await driver.wait(until.elementLocated(By.css('h3')), 10000);
        sleep(60000);
        // console.log(await firstResult.getAttribute('textContent'));
    }
    finally{
        driver.quit();
    }
})();