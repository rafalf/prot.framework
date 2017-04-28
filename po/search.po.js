var commonHelper = require('./../helpers/common.helper.js');

var searchPage = function () {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    this.inSearch = $('[name="searchText"]');

    this.btnSearch = $('.search-btn');

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    this.enterNameToSearch = function (value) {
        this.inSearch.sendKeys(value);
    };

    this.selectSearchBtn = function () {
        this.btnSearch.click()
    };

};

module.exports = searchPage;
