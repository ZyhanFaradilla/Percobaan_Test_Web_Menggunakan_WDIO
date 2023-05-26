const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('Swag Labs Login', () => {
    it.skip('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.Products).toBeExisting()
        await expect(SecurePage.Products).toHaveTextContaining(
            'Products')
    })
    it.skip('Login dengan invalid data username', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_use', 'secret_sauce')
        await expect(SecurePage.FlashAllertLogin).toHaveTextContaining(
            'Epic sadface: Username and password do not match any user in this service')
    })
    it.skip('Login dengan invalid data password', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauc')
        await expect(SecurePage.FlashAllertLogin).toHaveTextContaining(
            'Epic sadface: Username and password do not match any user in this service')
    })
    it.skip('Login dengan data username kosong', async () => {
        await LoginPage.open()

        await LoginPage.login('', 'secret_sauce')
        await expect(SecurePage.FlashAllertLogin).toHaveTextContaining(
            'Epic sadface: Username is required')
    })
    it('Login dengan password kosong', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_use', '')
        await expect(SecurePage.FlashAllertLogin).toHaveTextContaining(
            'Epic sadface: Password is required')
    })
    it.skip('should logout and verify logout to login page', async () => {
        await SecurePage.menu.click();
        await SecurePage.btnLogout.click();

        await expect(SecurePage.login).toHaveTextContaining("Swag Labs");
    });
})


