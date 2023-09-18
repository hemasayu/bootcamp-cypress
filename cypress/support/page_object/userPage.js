class LoginPage {
  //store locator yg digunakan 
  username = '[data-test="username"]'
  password = '[data-test="password"]'
  loginButton = '#login-button'
  errorMsg = '[data-test= "error"]'

  inputUsername(username) {
    cy.get(this.username).type(username)
  }

  inputPassword(password) {
    cy.get(this.password).type(password)
  }

  clickLoginButton() {
    cy.get(this.loginButton).click()
  }

  verifyProduct(){
    cy.get('.product_label').should('contain', 'Products')
  }

  showErrorMsg(){
    cy.get(this.errorMsg).should('be.visible')
  }
}
export default new LoginPage()

