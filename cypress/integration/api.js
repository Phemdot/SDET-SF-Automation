/// <reference types="cypress"/>

it('Create new user', () => {
    
    cy.fixture('user').then((userdata) =>{

        cy.request({
            method: 'POST', 
            url: 'https://reqres.in/api/users', 
    
            body: {
                "name" : userdata.name,
                "job" :  userdata.job
                },
            
                headers: {
                    'content-type' : 'application/json'
                }
    
          }).then((res) => {
              expect(res.status).to.equal(201),
              expect(res.duration).to.be.lessThan(2000),
              expect(res.headers).to.have.property('content-type','application/json; charset=utf-8')
          })
    })
    
    

})