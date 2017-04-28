var faker = require('faker');

/**
 * Common helper object.
 * @constructor
 */
var CommonHelper = function() {

    /**
     *  Common locators
     */

    this.widgetPanel = $('.widget-panel');


    /**
     * Clear browser session storage
     *
     */
    this.clearSessionStorage = function () {
        browser.executeScript('window.sessionStorage.clear();');
    };

    /**
     * Clear browser local storage
     *
     */
    this.clearLocalStorage = function () {
        browser.executeScript('window.localStorage.clear();');
    };

    /**
     * Clear cookies
     *
     */
    this.clearCookies = function () {
        browser.manage().deleteAllCookies();
    };

    /**
     * Clear all browser data
     *
     */
    this.clearAllData = function () {
        this.clearSessionStorage();
        this.clearLocalStorage();
        this.clearCookies();
    };

    /**
    * Wait until selected element will be present in DOM
    *
    * @param element
    */
    this.waitUntilElementPresent = function (element) {
        var EC = protractor.ExpectedConditions;
        browser.driver.wait(EC.presenceOf(element));
    };

    /**
    * Wait until selected element will be absent in DOM
    *
    * @param element
    */
    this.waitUntilElementIsNotPresent = function (element) {
        var EC = protractor.ExpectedConditions;
        browser.driver.wait(EC.stalenessOf(element));
    };

    /**
    * Wait until selected element will be visible
    *
    * @param element
    */
    this.waitUntilElementVisible = function (element) {
        var EC = protractor.ExpectedConditions;
        browser.driver.wait(EC.visibilityOf(element));
    };

    /**
    * Wait until selected element will be invisible
    *
    * @param element
    */
    this.waitUntilElementInvisible = function (element) {
        var EC = protractor.ExpectedConditions;
        browser.driver.wait(EC.invisibilityOf(element));
    };

    /**
    * Wait until selected element will be clickable
    *
    * @param element
    */
    this.waitUntilElementClickable = function (element) {
        var EC = protractor.ExpectedConditions;
        browser.driver.wait(EC.elementToBeClickable(element));
    };

    /**
    * Mouse over element
    *
    * @param element
    */
    this.moveMouseOver = function (element) {
        browser.actions().mouseMove(element).perform();
    };

    /**
    * Unique value
    *
    */
    this.uniqueValue = function () {
        return faker.random.uuid();
    };

    /**
    * Unique alpha numeric value
    *
    */
    this.randomAlphaNumeric = function () {
      return faker.random.alphaNumeric();
    };

    /**
    * Select option in dropdown
    *
    * @param element, option
    */
    this.selectFromDropdown = function (element, option) {
        element.element(by.cssContainingText('option', option)).click();
    };

    /**
    * Switch to next browser tab
    *
    */
    this.switchToNextTab = function () {
        browser.getAllWindowHandles().then(function (handles) {
          if (handles.length > 1) {
            browser.switchTo().window(handles[handles.length - 1]);
          }
        });
    };

    /**
    * Switch to previous browser tab
    *
    */
    this.switchToPreviousTab = function () {
        browser.getAllWindowHandles().then(function (handles) {
          if (handles.length > 1) {
            browser.close();
            browser.switchTo().window(handles[handles.length - 2]);
          }
        });
    };

    /**
    * Accept browser alert if present
    *
    */
    this.acceptAlert = function() {
        browser.switchTo().alert().then(function(alert) {
          alert.accept();
        }, function (err) { } );
    };
};

module.exports = new CommonHelper();
