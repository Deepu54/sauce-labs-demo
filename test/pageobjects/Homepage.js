const utils = require('../specs/utils')

const _threeDot = '#react-burger-menu-btn'
const _logout = '#logout_sidebar-link'
const _Cart = '#shopping_cart_container'


class homepage{
    static async cartButton() {
        await utils.clickOnElement(_Cart)
    }
    static async removeProduct() {
        await utils.clickOnElement(_Cart)
    }

    static async logout() {
        await utils.clickOnElement(_threeDot)
        await utils.clickOnElement(_logout)

    }
    
}
module.exports = homepage
