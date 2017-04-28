var commonHelper = require('./../helpers/common.helper.js');

var NewTemplate = function () {

  //--------------------------------------------------------------------------
  // Locators
  //--------------------------------------------------------------------------

  var eventClick = '[ng-click="btnEventClick($event)"]:nth-of-type(1)';

  //--------------------------------------------------------------------------
  // Elements
  //--------------------------------------------------------------------------

  this.btnSaveTemplate = $('.template');

  //--------------------------------------------------------------------------
  // Functions
  //--------------------------------------------------------------------------

  this.clickSaveTemplate = function () {
     this.btnSaveTemplate.click();
  };


};

module.exports = NewTemplate;
