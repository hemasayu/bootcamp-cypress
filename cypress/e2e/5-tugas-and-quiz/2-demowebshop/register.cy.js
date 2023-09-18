import registerPage from "../../../support/page_object/userWebShop"
const userWebshop = require('../../../fixtures/user-demowebshop.json')

describe('Demo Web Shop Registration', () => {
beforeEach('Visit Demo Web Shop', () => {
    cy.visit('/')
    cy.get('.ico-register').click()
    cy.url().should('include', '/register')
})

it('Register new user', () => {
    cy.webShopNewRegister()
    cy.verifyContain('.result', 'Your registration completed')
})

it('Register with existing email', () => {
    cy.webShopRegister()
    cy.verifyContain('.validation-summary-errors', 'already exist')
})

it('Register without filling the fields', () => {
    cy.get('#register-button').click()
    cy.verifyContain('.field-validation-error', 'is required')
})

})
