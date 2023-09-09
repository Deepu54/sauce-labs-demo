const dataInp = require('../../testConfig.json')
const Login = require('../pageobjects/login')
const AddToCart = require('../pageobjects/AddToCart')
const CheckoutDetails = require('../pageobjects/CheckoutDetails')
const Homepage = require('../pageobjects/Homepage')
const utils = require('./utils')
const homepage = require('../pageobjects/Homepage')


describe("Sauce Labs Url", async function() {
    it('it should open the correct website', async function() {
        await browser.url(dataInp.baseUrl);
        await browser.maximizeWindow();
    })
})
describe("Saucelabs Login", async function() {
    it('User should  be able to Login on saucelabs website', async function() {
        await Login.LoginUsername();
        await Login.LoginPassword();
        await Login.Loginn();
    })
})
describe ("SauceLabs AddToCart", async function() {
    it('User should be able to Add to Cart Products', async function() {
        await AddToCart.dynamicProductSelection();
        await homepage.cartButton();
    })
})
describe("Saucelabs Checkout", async function() {
    it('User should be able to checkout',async function() {
        await CheckoutDetails.checkout();
        await CheckoutDetails.UserDetails();
    })
})
// describe("Saucelabs Logout", async function() {
//     it('User should be able to logout', async function() {
//         await homepage.logout();
//     })
// })
