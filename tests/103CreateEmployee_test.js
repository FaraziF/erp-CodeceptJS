var faker = require('faker');
Feature('03CreateEmployee');

Scenario('test something', (I) => {
    I.loginAsAdmin();
    	I.click('WP ERP');
        I.click('HR');
        I.amOnPage('/wp-admin/admin.php?page=erp-hr&section=employee');
        I.click('#erp-employee-new');
        I.fillField('#first_name', faker.name.firstName());
        I.fillField('#last_name', faker.name.lastName());
        I.fillField('personal[employee_id]', faker.phone.phoneNumber());
        // I.fillField('#personal[employee_id]', '037483759');
        I.fillField('#erp-hr-user-email', faker.internet.email());
        I.click('#select2-worktype-container');
        // I.wait(5);
        I.click('//span[2]/ul/li[2]');
        I.click('//div[8]/span/span/span/span');
        I.click('//span[2]/ul/li[2]');
        I.fillField('#work[hiring_date]', '2019-02-20');
        I.click('Create Employee');
        I.wait(5);
        I.waitForElement('//h2/a[2]', 30);
        // I.click('Job');
});
