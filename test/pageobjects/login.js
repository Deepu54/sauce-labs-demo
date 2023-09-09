const dataInp = require('../../testConfig.json')
const utils = require('../specs/utils')
const _Username = '#user-name'
const _Password = '#password'
const _Login = '#login-button'



class Login {
    static async LoginUsername() {
        await utils.typeText(_Username, dataInp.Username)
    }
    static async LoginPassword() {
        await utils.typeText(_Password, dataInp.Password)
    }
    static async Loginn() {
        await utils.clickOnElement(_Login)
    }
}
module.exports = Login
