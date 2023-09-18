
import LoginPage from "../../support/page_object/userPage"

Given('I open Saucedemo website', () => {
        cy.visit('/')
});

When('I type {string} and {string}', (username, password) => {
    LoginPage.inputUsername(username)
    LoginPage.inputPassword(password)
});

And('I click Log In button', () => {
    LoginPage.clickLoginButton();
});

Then('I should see {string}', () => {
    LoginPage.verifyProduct()
});