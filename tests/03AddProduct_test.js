var faker = require('faker');

Feature('AddProduct');

Scenario('Add New Product', (I) => {
    I.loginAsAdmin();
    I.previewProducts();
    I.click('Products & Services');
    I.wait(5);
    I.click('Add New Product');
    I.fillField('.wperp-form-field', faker.commerce.productName());
    I.fillField('#cost-price', '350');
    I.fillField('#sale-price', '400');
    I.pressKey('Tab');
    I.checkOption('form input[value=self]');
    I.click('Save');
    I.waitForElement('.wperp-products');
    
});
