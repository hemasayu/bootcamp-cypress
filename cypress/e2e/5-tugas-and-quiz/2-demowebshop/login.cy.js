import registerPage from "../../../support/page_object/userWebShop"
const userWebshop = require('../../../fixtures/user-demowebshop.json')

describe('Demo Web Shop Registration', () => {
    beforeEach('Visit Demo Web Shop', () => {
        cy.visit('https://demowebshop.tricentis.com')
        cy.get('.ico-login').click()
        cy.url().should('include', '/login')
    })

it('Login with existing account', () =>{
    cy.webShopLogin()
    cy.verifyContain('.header-links > ul > :nth-child(1) > .account', userWebshop[0].email)
})

it('Login with unregistered account', () => {
    cy.webShopLoginUnregistered()
    cy.verifyContain('.validation-summary-errors', 'No customer account found')
    })

it('Login with valid account but invalid password', () => {
    cy.webShopLoginUnsuccess()
    cy.verifyContain('.validation-summary-errors', 'The credentials provided are incorrect')
})

})
