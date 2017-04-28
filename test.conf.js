var Config = require('./config.data.json');
var App = Config.apps[Object.keys(Config.apps)[0]];

var init = function() {
  for (var i = 0; i < process.argv.length; i++) {
    var obj = process.argv[i];
    var match = obj.match(/^--app=(.*)$/);
    if (match && match.length > 0) {
      App = Config.apps[match[1]];
    }
  }
};

init();

exports.config = {

    directConnect: true,

    baseUrl: App.baseUrl,
    params: App.params,

    capabilities: {
        browserName: 'chrome'
    },

    framework: 'jasmine',

    suites: {
        dev: ['./test/regression_tests/template_case.spec.js'],
        smoke: ['./test/smoke_tests/smoke_tests.spec.js'],
        regression: [
          './test/regression_tests/',
        ]
    },

    allScriptsTimeout: 30000,

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: true
    },

    onPrepare: function() {
        var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
        const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

        jasmine.getEnv().addReporter(new SpecReporter());
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './reports/',
            screenshotsFolder: 'images',
            takeScreenshotsOnlyOnFailures: true
        }));

        browser.ignoreSynchronization = false;
        browser.driver.manage().window().setSize(1440, 900);
    }
};
