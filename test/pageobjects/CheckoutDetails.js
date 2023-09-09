const utils = require('../specs/utils')
const dataInp = require('../../testConfig.json')

//locators
const _FirstName ='#first-name'
const _LastName = '#last-name'
const _ZipCode = '#postal-code'
const _Continue = '#continue'
const _Finish = '#finish'
const _backHome = '#back-to-products'
const _Checkout = '#checkout'

class CheckoutDetails {

    static async checkout() {
        await utils.clickOnElement(_Checkout)
    }
    static async firstName() {
        await utils.typeText(_FirstName, dataInp.firstName)
    }

    static async lastName() {
        await utils.typeText(_LastName, dataInp.lastName)
    }

    static async zipCode() {
        await utils.typeText(_ZipCode, dataInp.zipCode)
    }
    
    static async Continue() {
        await utils.clickOnElement(_Continue)
    }
    static async Payment() {
        await utils.clickOnElement(_Finish)
    }
    static async backHomeToProducts() {
        await utils.clickOnElement(_backHome)
    }

    static async UserDetails() {
        await this.firstName()
        await this.lastName()
        await this.zipCode()
        await this.Continue()
        await this.Payment()
        await this.backHomeToProducts()

    }

}
module.exports = CheckoutDetails