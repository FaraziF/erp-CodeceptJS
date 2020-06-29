Feature('002CreateDesignation');

Scenario('test something', (I) => {
    I.loginAsAdmin();
    	I.click('WP ERP');
        I.click('HR');
        // I.click('Deprtments');
        I.amOnPage('/wp-admin/admin.php?page=erp-hr&section=designation');
        I.click('#erp-new-designation');
        I.wait(5);
        I.fillField('#desig-title','Intern Support Eng');
        I.fillField('#desig-desc','Her is listing new intern support');
        I.click('Create Designation');
});
