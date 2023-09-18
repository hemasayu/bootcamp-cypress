import registerPage from "../support/page_object/userWebShop"
import { faker } from '@faker-js/faker';
const userWebshop = require('../fixtures/user-demowebshop.json')
const fakeFirstName = faker.name.firstName();
const fakeLastName = faker.name.lastName();
const fakeEmail = faker.internet.email();

 Cypress.Commands.add('login', (username, password) => {
     cy.get('[data-test="username"]').type(username)
     cy.get('[data-test="password"]').type(password)
     cy.get('#login-button').click()
 })
 Cypress.Commands.add('ketik', (locator, value) => {            //buat command type
    cy.get(locator)
        .should('be.visible')
        .type(value)
 })
 Cypress.Commands.add('verifyContain', (locator, value) =>{
    cy.get(locator)
    .should('contain', value)
 })

Cypress.Commands.add('curaLogin', (username, password) => {
    cy.get('#txt-username').type(username)
    cy.get('#txt-password').type(password)
    cy.get('#btn-login').click()
})

Cypress.Commands.add('webShopLogin', () => {
    registerPage.inputEmail(userWebshop[0].email)
    registerPage.inputPassword(userWebshop[0].password)
    cy.get('#RememberMe').click()
    registerPage.clickLoginBtn()
})

Cypress.Commands.add('webShopLoginUnsuccess', () => {
    registerPage.inputEmail(userWebshop[0].email)
    registerPage.inputPassword(userWebshop[0].wrongPassword)
    cy.get('#RememberMe').click()
    registerPage.clickLoginBtn()
})

Cypress.Commands.add('webShopLoginUnregistered', () => {
    registerPage.inputEmail(fakeEmail)
    registerPage.inputPassword(userWebshop[0].password)
    registerPage.clickLoginBtn()
})

Cypress.Commands.add('webShopNewRegister', () =>{
    cy.get('#gender-female').click()
    registerPage.inputFirstName(fakeFirstName)
    registerPage.inputLastName(fakeLastName)
    registerPage.inputEmail(fakeEmail)
    registerPage.inputPassword(userWebshop[0].password)
    registerPage.inputConfirmPassword(userWebshop[0].password)
    cy.get('#register-button').click()
})
Cypress.Commands.add('webShopRegister', () =>{
    cy.get('#gender-female').click()
    registerPage.inputFirstName(userWebshop[0].firstName)
    registerPage.inputLastName(userWebshop[0].lastName)
    registerPage.inputEmail(userWebshop[0].email)
    registerPage.inputPassword(userWebshop[0].password)
    registerPage.inputConfirmPassword(userWebshop[0].password)
    cy.get('#register-button').click()
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })