// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of this.
    // It is recommended to place a general 'login' function here.
    checkWarningFatalNotice: function () {
      this.dontSee('Warning');
      this.dontSee('Fatal error');
      this.dontSee('Notice:');
    },
    loginAsAdmin: function () {
      this.amOnPage('/erp-feature-extension/wp-admin');
      this.fillField('#loginform #user_login', 'admin');
      this.fillField('#loginform #user_pass', 'admin');
      this.checkOption('rememberme');
      this.click('Log In');
    }
  });
}
