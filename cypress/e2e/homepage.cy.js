describe('Homepage', () => {
    it('Verify that product displayed on the homepage', () => {
        cy.visit('https://practicesoftwaretesting.com/#/');
        cy.get('.col-md-9 > .container').should('be.visible');
    })
})