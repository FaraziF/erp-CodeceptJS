Feature('16ChartOfAccount');

Scenario('test something', (I) => {
    I.loginAsAdmin();
    	I.amOnPage('/wp-admin/admin.php?page=erp-accounting#/charts');
    	I.wait(5);
    	I.click({css : '.wperp-btn'});
    	I.click('.vue-treeselect__input');
    	I.wait(5);
    	I.click('//div[7]/div/div/label');
    	I.fillField('//div[2]/input', 'SCB');
    	I.fillField('//form/div[3]/input', '23543543535');
    	I.click('Save');
});
