describe('CURA healthcare web test', () => {
  beforeEach(() =>{
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
    cy.get('#btn-make-appointment').click()
    cy.get('.lead').should('contain.text', 'Please login')
  })
  it('Login without input any credential', () =>{
    cy.get('#btn-login').click()
    cy.get('.text-danger').should('contain', 'Login failed!')
  })
  it('Login with valid credential', () => {  
    cy.fixture('cura.json').then((user) =>{
      const dataUser = user
      cy.curaLogin(dataUser.username, dataUser.password)
      cy.url().should('include', '#appointment')
    })
  })
  it('Login with invalid credential', () => {
      cy.curaLogin('invalid', 'notValid')
    cy.get('.text-danger').should('contain', 'Login failed!')
  })
  it('Book an appointment', () =>{
    cy.fixture('cura.json').then((booking) =>{
      const bookingAppointment = booking
      cy.curaLogin(bookingAppointment.username, bookingAppointment.password)
      cy.url().should('include', '#appointment')
      cy.get('#combo_facility')
      cy.get('select')
        .select(0)
        .should('have.value', bookingAppointment.facility)
      cy.get('#txt_visit_date').type(bookingAppointment.bookingDate)
      cy.get('#btn-book-appointment').click()
      cy.get('h2').should('have.text', 'Appointment Confirmation')
      cy.get('#facility').should('have.text', bookingAppointment.facility)
      cy.get('#visit_date').should('have.text', bookingAppointment.bookingDate)
    })
  })
  it('Book an appointment with backdate', () => {                                 //negative test case should be failed because expected get error but success
    cy.fixture('cura.json').then((booking) => {
      const bookingAppointment = booking
      cy.curaLogin(bookingAppointment.username, bookingAppointment.password)
      cy.url().should('include', '#appointment')
      cy.get('#combo_facility')
      cy.get('select')
        .select(0)
        .should('have.value', bookingAppointment.facility)
      cy.get('#txt_visit_date').type(bookingAppointment.backDate)
      cy.get('#btn-book-appointment').click()
      cy.url().should('not.include', '/appointment.php#summary')
    })
  })

})
