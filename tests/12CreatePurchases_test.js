Feature('12CreatePurchases');

Scenario('test something', (I) => {
    I.loginAsAdmin();
    //         I.previewTransactions();
     //        I.click('Purchase');
     //        I.wait(5);
     //        I.moveMouseOver('#erp-accounting');
     //        I.click(['css' => '.wperp-selected-option']);
     //        I.click('Create Purchase');
     //        I.wait(5);
        I.amOnPage('/wp-admin/admin.php?page=erp-accounting#/purchases/new');
        I.click('div.multiselect');
        I.click('//th/div/div[2]');
        I.click('//th/div/div[3]/ul/li[2]/span');
        I.wait(5);
        I.click('Save');
        I.seeInCurrentUrl('/wp-admin/admin.php?page=erp-accounting#/purchases');
});
