var pageObject            = require('./../../po/pages').container.PageObject;
var templatePage          = pageObject.getTemplatePage();
var searchPage            = pageObject.getSearchPage();
var usersData             = require('./../../data/users/data');
var commonHelper          = require('./../../helpers/common.helper.js');

describe('template', function () {

  var username = usersData.entities.loginMember;
  var password = usersData.entities.password;
  var baseUrl = usersData.baseUrl
  var widgetUrl = usersData.widgetUrl

  describe('test case 1', function () {

    beforeAll(function () {
      browser.get(widgetUrl);
      commonHelper.waitUntilElementPresent(commonHelper.widgetPanel);
    });

    afterAll(function () {
      commonHelper.clearAllData();
    });

    it('should enter and search nonprofit',function () {
      searchPage.enterNameToSearch('ac1');
      searchPage.selectSearchBtn();
    });

    it('should enter search nonprofit',function () {
        searchPage.enterNameToSearch('ac1');
    });

  });
});
