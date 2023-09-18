describe('Reqres dan Gorest API testing', () => {

  function randomEmail(){
    const randomString = Math.random.toString(36).substring(2, 10) //mathrandomtostring untuk convert bilangan random ke string, 36 adl jumlah huruf dan bilangan, substring 2,10 adl ambil variable dari urutan k2 sampai ke10
    const email = randomString + "@gimail.com"
    return email
  }

  let emailAddress = randomEmail

  it('get list user', () => {
    cy.request({
      method:'GET',
      url:'https://reqres.in/api/users?page=2'
    }).then((response) =>{
      expect(response.status).to.equal(200) //assertion untuk test response 200
    })
  })



  it('create user Reqres', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      body: {
        "name": "Hemas Ayu",
        "job": "SQA"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)  
      expect(response.body).has.property("name", "Hemas Ayu") //assertion untuk detect object name 'Hemas Ayu'
    })  
  })

  it('create user Gorest API', () => {
    cy.request({
      method: 'POST',
      url: 'https://gorest.co.in/public/v2/users',
      headers:{
        Authorization: 'Bearer d97ac08dfdfd0ee435331ec9b087162a0e077a6a0cac2fdd3177b2e18ade3145'
      },
      body:{
        "name": "Hemas Ayu",
        "email": emailAddress,
        "gender": "female",
        "status": "active"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
    })
  })
  failOnStatusCode: false
})