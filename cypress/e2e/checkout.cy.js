describe('Checkout', () => {
    it('Add Product to Cart', () => {
        cy.visit('https://practicesoftwaretesting.com/#/');
        cy.get('.col-md-9 > .container').should('be.visible');
        cy.get('.card').eq(4).click();
        cy.get('[data-test="product-name"]').should('contain', "Slip Joint Pliers");
        cy.get('[data-test="increase-quantity"]').dblclick();
        cy.get('[data-test="add-to-cart"]').click();
        cy.get('.ng-trigger').should('be.visible');
    })
    it.only('Checkout Product', () => {
        cy.visit('https://practicesoftwaretesting.com/#/');
        cy.get('.col-md-9 > .container').should('be.visible');
        cy.get('.card').eq(4).click();
        cy.get('[data-test="product-name"]').should('contain', "Slip Joint Pliers");
        cy.get('[data-test="increase-quantity"]').dblclick();
        cy.get('[data-test="add-to-cart"]').click();
        cy.get('.ng-trigger').should('be.visible');
        cy.wait(6000);
        cy.get('[data-test="nav-cart"]').click();
        cy.wait(4000);
        cy.get('[id*=quantity-]').clear().type(2);
        cy.get('[data-test="proceed-1"]').click();
    })
})