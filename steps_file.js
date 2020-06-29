// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of this.
    // It is recommended to place a general 'login' function here.
    loginAsAdmin: function () {
      this.amOnPage('/wp-admin');
      this.fillField('#loginform #user_login', 'admin');
      this.fillField('#loginform #user_pass', 'admin');
      this.checkOption('rememberme');
      this.click('Log In');
    },
    checkError: function () {
      this.dontSee('Warning');
      this.dontSee('Fatal error');
      this.dontSee('Notice:');
    },
    previewUsers: function () {
      this.click('WP ERP');
      this.click('Accounting');
      this.wait(5);
      this.moveCursorTo('//div[2]/div/div[2]/div/div/ul/li[2]/a');
    },
    previewProducts: function () {
      this.click('WP ERP');
      this.click('Accounting');
      this.wait(5);
      this.moveCursorTo('//div[2]/div/div[2]/div/div/ul/li[6]/a');   
    },
    previewTransactions: function () {
      this.click('WP ERP');
      this.click('Accounting');
      this.wait(5);
      this.moveCursorTo('//div[2]/div/div[2]/div/div/ul/li[3]/a');
    }
  });
}
