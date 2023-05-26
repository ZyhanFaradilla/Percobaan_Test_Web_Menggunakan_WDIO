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
    it('Melihat Detail Produk', async () => {
        await SecurePage.namaProduct.click();

        await expect(SecurePage.Detail).toHaveTextContaining("carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.");
    });
    it('Memasukkan Produk ke Keranjang', async () => {
        await SecurePage.btnAddCartDetail.click();

        await expect(SecurePage.Cart).toHaveTextContaining("1");
    });
    it('Menghapus Produk dari Detail Produk', async () => {
        await SecurePage.btnRemove.click();
    
        await expect(SecurePage.Detail).toHaveTextContaining("carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.");
    })
})