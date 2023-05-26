const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputFirstName () {
        return $('#first-name');
    }

    get inputLastName () {
        return $('#last-name');
    }

    get inputZIP () {
        return $('#postal-code');
    }

    get btnContinue () {
        return $('#continue');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async checkout (firtsname, lastname, Zip) {
        await this.inputFirstName.setValue(firtsname);
        await this.inputLastName.setValue(lastname);
        await this.inputZIP.setValue(Zip);
        await this.btnContinue.click();
    }
}
module.exports = new CheckoutPage();