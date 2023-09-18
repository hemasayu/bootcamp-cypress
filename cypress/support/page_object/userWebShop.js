class registerPage {
    firstName = '#FirstName'
    lastName = '#LastName'
    email = '#Email'
    password = '#Password'
    confirmPassword ='#ConfirmPassword'
    loginBtn = ".button-1.login-button"
    loginHeader = ".header-links > ul > :nth-child(1) > .account"
    logoutBtn = ".ico-logout"


    inputFirstName(firstName){
        cy.get(this.firstName).type(firstName)
    }

    inputLastName(lastName){
        cy.get(this.lastName).type(lastName)
    }

    inputEmail(email){
        cy.get(this.email).type(email)
    }

    verifyRegisterPage(){
        cy.url().should('include', '/register')
    }

    verifyRegisterSuccess(){
        cy.get('.result').should('contain', 'Your registration completed')
    }

    inputPassword(password){
        cy.get(this.password).type(password)
    }

    inputConfirmPassword(confirmPassword) {
        cy.get(this.confirmPassword).type(confirmPassword)
    }
    
    clickLoginBtn(){
        cy.get(this.loginBtn).click()
    }

    clickLogoutBtn(){
        cy.get(this.logoutBtn).click()
    }
    
}
export default new registerPage()