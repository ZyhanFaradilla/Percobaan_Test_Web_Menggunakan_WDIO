

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get Products () {
        return $('.title');
    }
    get FlashAllertLogin () {
        return $('#login_button_container');
    }
    get btnAllItems () {
        return $('#inventory_sidebar_link');
    }
    get btnAbout () {
        return $('#about_sidebar_link');
    }
    get About () {
        return $('#__next')
    }
    get btnReset () {
        return $('#reset_sidebar_link');
    }
    get btnLogout () {
        return $('#logout_sidebar_link');
    }
    get menu () {
        return $('#react-burger-menu-btn');
    }
    get filter() {
        return $('#header_container')
    }
    get AtoZ() {
        return $('//*[@id="header_container"]/div[2]/div/span/select/option[1]')
    }
    get ZtoA() {
        return $('//*[@id="header_container"]/div[2]/div/span/select/option[2]')
    }
    get lowtohigh() {
        return $('//*[@id="header_container"]/div[2]/div/span/select/option[3]')
    }
    get hightolow() {
        return $('//*[@id="header_container"]/div[2]/div/span/select/option[4]')
    }
    get login () {
        return $('.login_logo');
    }
    get btnAddCart () {
        return $('#add-to-cart-sauce-labs-backpack');
    }
    get btnAddCartDetail () {
        return $('#add-to-cart-sauce-labs-backpack');
    }
    get Cart () {
        return $('.shopping_cart_badge');
    }
    get btnDetailCart() {
        return $('#shopping_cart_container')
    }
    get DetailCart() {
        return $('#header_container')
    }
    get namaProduct () {
        return $('.inventory_item_name');
    }
    get Detail () {
        return $('.inventory_details_desc_container');
    }
    get btnRemove () {
        return $('#remove-sauce-labs-backpack')
    }
    get btnCheckout () {
        return $('#checkout')
    }
    get YourInfo () {
        return $('//*[@id="header_container"]/div[2]/span')
    }
    get Overview () {
        return $('//*[@id="header_container"]/div[2]/span')
    }
    get btnFinish () {
        return $('#finish')
    }
    get Finish () {
        return $('//*[@id="header_container"]/div[2]/span')
    }
    get FlashAllertCheckout () {
        return $('#checkout_info_container');
    }
}

module.exports = new SecurePage();
