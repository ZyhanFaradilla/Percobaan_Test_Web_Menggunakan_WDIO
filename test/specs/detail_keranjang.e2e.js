const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const CheckoutPage = require('../pageobjects/checkout_form.page')

describe('Detail Cart', () => {
    it('Harus Login', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.Products).toBeExisting()
        await expect(SecurePage.Products).toHaveTextContaining(
            'Products')
    })
    it('Memasukkan Produk ke Keranjang', async () => {
        await SecurePage.btnAddCart.click();

        await expect(SecurePage.Cart).toHaveTextContaining("1");
    });
    it('Melihat Keranjang', async () => {
    await SecurePage.btnDetailCart.click();

    await expect(SecurePage.DetailCart).toHaveTextContaining("Your Cart");
    })
    it.skip('Menghapus Produk di Keranjang', async () => {
        await SecurePage.btnRemove.click();
    
        await expect(SecurePage.DetailCart).toHaveTextContaining("Your Cart");
    })
    it('Checkout Barang', async () => {
        await SecurePage.btnCheckout.click();
    
        await expect(SecurePage.YourInfo).toHaveTextContaining("Checkout: Your Information");
    })
    it.skip('Form Diisi Dengan Data yang Benar', async () => {

        await CheckoutPage.checkout('Zyhan','Dilla','11510')
        await expect(SecurePage.Overview).toHaveTextContaining(
            'Checkout: Overview')
    })
    it.skip('Pesanan Selesai', async () => {
        await SecurePage.btnFinish.click();

        await expect(SecurePage.Finish).toHaveTextContaining(
            'Checkout: Complete!')
    })
    it.skip('Form Diisi Dengan Data kurang First Name', async () => {

        await CheckoutPage.checkout('','Dilla','11510')
        await expect(SecurePage.FlashAllertCheckout).toHaveTextContaining(
            'Error: First Name is required')
    })
    it.skip('Form Diisi Dengan Data kurang Last Name', async () => {

        await CheckoutPage.checkout('Zyhan','','11510')
        await expect(SecurePage.FlashAllertCheckout).toHaveTextContaining(
            'Error: Last Name is required')
    })
    it('Form Diisi Dengan Data kurang Postal Code', async () => {

        await CheckoutPage.checkout('Zyhan','Dilla','')
        await expect(SecurePage.FlashAllertCheckout).toHaveTextContaining(
            'Error: Postal Code is required')
    })
})