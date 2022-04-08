/// <reference types="cypress"/>

it('Create new user', () => {
    cy.request({
        method: 'POST', 
        url: 'https://reqres.in/api/users', 

        body: {
            'name' : 'Khalid',
            'job' : 'Sec'
            },
        
            headers: {
                'content-type' : 'application/json'
            }

      })

})