Feature('13PayPurchases');

Scenario('test something', (I) => {
    I.loginAsAdmin();
    //         I.previewTransactions();
     //        I.click('Purchase');
     //        I.wait(5);
     //        I.moveMouseOver('#erp-accounting');
     //        I.click(['css' => '.wperp-selected-option']);
     //        I.click('Pay Purchase');
     //        I.wait(5);
        I.amOnPage('/wp-admin/admin.php?page=erp-accounting#/pay-purchases/new');	
        I.wait(5);
        // I.click('//input');
        I.click('div.multiselect');
        I.click('//div[3]/ul/li/span/span');
        I.wait(5);
        I.click('//*[@id="erp-accounting"]/div[2]/form/div[1]/div/div/div[4]/div/div[2]');
        I.click('//div[4]/div/div[3]/ul/li/span');
        I.wait(10);
        I.click('//form/div/div/div/div[5]/div/div/div[2]');
        I.click('//div[5]/div/div/div[3]/ul/li/span');
        I.click('Save');
});
