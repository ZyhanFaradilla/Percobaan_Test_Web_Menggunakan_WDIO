const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('Homepage Products', () => {
    it('Harus Login', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.Products).toBeExisting()
        await expect(SecurePage.Products).toHaveTextContaining(
            'Products')
    })
    it.skip('Mengecek fungsionalitas menu All Items', async () => {
        await SecurePage.menu.click();
        await SecurePage.btnAllItems.click();

        await expect(SecurePage.Products).toHaveTextContaining("Products");
    });
    it.skip('Mengecek fungsionalitas menu About', async () => {
        await SecurePage.menu.click();
        await SecurePage.btnAbout.click();

        await expect(SecurePage.About).toHaveTextContaining("The world relies on your code. Test on thousands of device, browser, and OS configurations – anywhere, any time.");
    });
    it.skip('Mengecek fungsionalitas menu Reset App State', async () => {
        await SecurePage.menu.click();
        await SecurePage.btnReset.click();

        await expect(SecurePage.Products).toHaveTextContaining("Products");
    });
    it.skip('Filter Sesuai Nama A to Z', async () => {
        await SecurePage.filter.click();
        await SecurePage.AtoZ.click();

        await expect(SecurePage.AtoZ).toHaveTextContaining("Name (A to Z");
    });
    it.skip('Filter Sesuai Nama Z to A', async () => {
        await SecurePage.filter.click();
        await SecurePage.ZtoA.click();

        await expect(SecurePage.ZtoA).toHaveTextContaining("Name (Z to A");
    });
    it.skip('Filter Sesuai Price low to high', async () => {
        await SecurePage.filter.click();
        await SecurePage.lowtohigh.click();

        await expect(SecurePage.lowtohigh).toHaveTextContaining("Price (low to high");
    });
    it.skip('Filter Sesuai Price high to low', async () => {
        await SecurePage.filter.click();
        await SecurePage.hightolow.click();

        await expect(SecurePage.hightolow).toHaveTextContaining("Price (high to low");
    });
    it('Memasukkan Produk ke Keranjang', async () => {
        await SecurePage.btnAddCart.click();

        await expect(SecurePage.Cart).toHaveTextContaining("1");
    });
    it.skip('Melihat Keranjang', async () => {
        await SecurePage.btnDetailCart.click();

        await expect(SecurePage.DetailCart).toHaveTextContaining("Your Cart");
    });
    it('Menghapus Produk dari Detail Produk', async () => {
        await SecurePage.btnRemove.click();
    
        await expect(SecurePage.Products).toHaveTextContaining("Products");
    })
})


