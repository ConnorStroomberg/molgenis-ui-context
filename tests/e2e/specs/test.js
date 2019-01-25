// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'display navbar test': browser => {
    browser
      .resizeWindow(2560, 1600)
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.navbar')
      .assert.elementPresent('.navbar-brand')
      .assert.elementPresent('.navbar-expand-md')
      .assert.elementPresent('.nav-item.active')
      .assert.containsText('.active', 'Navigator')
      .resizeWindow(200, 400)
      .waitForElementVisible('.navbar-toggler-icon', 5000)
      .assert.cssClassNotPresent('.navbar.navbar-light.bg-light', '.navbar-expand-md')
      .end()
  },
  'show cookiewall and hide on click': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.jumbotron')
      .assert.elementPresent('.jumbotron button.btn')
      .click('.jumbotron button.btn')
      .pause(600)
      .assert.elementNotPresent('.jumbotron')
      .assert.elementNotPresent('.jumbotron button.btn')
      .end()
  },
  'wil not show cookiewall after click': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.jumbotron')
      .assert.elementPresent('.jumbotron button.btn')
      .click('.jumbotron button.btn')
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementNotPresent('.jumbotron')
      .assert.elementNotPresent('.jumbotron button.btn')
      .end()
  }
}
