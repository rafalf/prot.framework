var bottlejs  = require('bottlejs').pop('test');

bottlejs.factory('PageObject', function () {
  return {
    getTemplatePage: function () {
      var templatePage = require('./template.po.js');
      return new templatePage();
    },
    getSearchPage: function () {
    var searchPage = require('./search.po.js');
    return new searchPage();
    }
  }
});

module.exports = bottlejs;
