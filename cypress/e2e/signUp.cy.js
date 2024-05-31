describe('Sign Up', () => {
    it('Sign Up Using Valid Credential', () => {
        cy.visit('https://practicesoftwaretesting.com/#/auth/register');
        cy.get('[data-test="first-name"]').type("tester");
        cy.get('[data-test="last-name"]').type("automate");
        cy.get('[data-test="dob"]').type("1998-01-01");
        cy.get('[data-test="address"]').type("Jl.Candi");
        cy.get('[data-test="postcode"]').type("Jl.67666");
        cy.get('[data-test="city"]').type("Jakarta");
        cy.get('[data-test="state"]').type("Jakarta");
        cy.get('[data-test="country"]').select('ID').should('have.value', 'ID');
        cy.get('[data-test="phone"]').type("087778787874");
        cy.get('[data-test="email"]').type("orson.rafael@dockleafs.com");
        cy.get('[data-test="password"]').type("Makandegan1234@");
        cy.get('[data-test="register-submit"]').click();

    })


})