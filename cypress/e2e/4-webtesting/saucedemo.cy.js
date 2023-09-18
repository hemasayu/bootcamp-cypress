import LoginPage from "../../support/page_object/userPage"
const userr = require('../../fixtures/user.json')

describe('Saucedemo Testing', () => {
  beforeEach(() => {
    cy.visit('/')
    //Cypress.env('staging_url)
  })

  it('C1 Login success with Page Object Model', () => {
    LoginPage.inputUsername(userr[0].username)
    LoginPage.inputPassword(userr[0].password)
    LoginPage.clickLoginButton()
    LoginPage.verifyProduct()
  })
  
  it('C2 Success login with commands', () =>{
    cy.login('standard_user', 'secret_sauce')
    cy.get('.product_label').should('contain', 'Products')
  })
  it('C3 Success login with Fixture', () => {
    cy.fixture('user.json').then((user) =>{
      const datauser = user[0]
      cy.login(datauser.username, datauser.password)
      cy.get('.product_label').should('contain', 'Products') //test
    })
  })
  it('C4 Login success', () => {
    cy.ketik('[data-test="username"]', 'standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.product_label').should('contain', 'Products')
  })
  it('C5 Login failed', () => { //it.skip --> test case ini diskip tidak dijalankan
    cy.ketik('[data-test="username"]', 'hemas')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.verifyContain('[data-test="error"]', 'do not match')
  })
  it('C6 Multiple failed login using data itteration', () =>{
    cy.fixture('failed-user.json').then((user) =>{
    user.failed_login.forEach((datauser) =>{
      cy.login(datauser.username, datauser.password)
      cy.get('[data-test="error"]').should('be.visible')
    })
    })
  })
  it('C7 Login locked user', () => { //it.only hanya nge-run test case 1 ini
    cy.get('[data-test="username"]').type('locked_out_user') 
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.verifyContain('[data-test="error"]', 'has been locked out')
  })
})