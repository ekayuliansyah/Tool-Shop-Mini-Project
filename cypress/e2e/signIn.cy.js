describe('Sign In', () => {
    it('Sign In Using Valid Credential', () => {
        cy.visit('https://practicesoftwaretesting.com/#/');
        cy.get('[data-test="nav-sign-in"]').click();
        cy.get('h3').should('contain', "Login");
        cy.get('[data-test="email"]').type("orson.rafael@dockleafs.com");
        cy.get('[data-test="password"]').type("Rasuk1996@");
        cy.get('[data-test="login-submit"]').click();
        cy.get('[data-test="nav-menu"]').should('contain', "TESTER TES");
    })
    it('Sign In Using Invalid Credential', () => {
        cy.visit('https://practicesoftwaretesting.com/#/');
        cy.get('[data-test="nav-sign-in"]').click();
        cy.get('h3').should('contain', "Login");
        cy.get('[data-test="email"]').type("haganig369@n");
        cy.get('[data-test="password"]').type("Tes");
        cy.get('[data-test="login-submit"]').click();
        cy.get('[data-test="login-error"]').should('contain', "Invalid email or password");
    })
    it('Empty Email & Password', () => {
        cy.visit('https://practicesoftwaretesting.com/#/');
        cy.get('[data-test="nav-sign-in"]').click();
        cy.get('h3').should('contain', "Login");
        cy.get('[data-test="login-submit"]').click();
        cy.get('[data-test="email-error"]').should('contain', "Email is required");
        cy.get('[data-test="password-error"]').should('contain', "Password is required");
    })
})