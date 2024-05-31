describe('Checkout', () => {
    context('Without Login', () => {
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
            cy.get('[data-test="nav-cart"]', { timeout: 4000 }).click();
            // cy.wait(4000);
            cy.get('[id*=quantity-]').clear().type(2);
            cy.get('[data-test="proceed-1"]').click();
            cy.get('[data-test="email"]').type('orson.rafael@dockleafs.com');
            cy.get('[data-test="password"]').type('Makandegan1234@');
            cy.get('[data-test="login-submit"]').click();
            cy.get('[data-test="proceed-2"]').click();
            cy.get('[data-test="address"]').should('have.value', "Jl.Candi");
            cy.get('[data-test="proceed-3"]').click();
            cy.get('[data-test="payment-method"]').select('buy-now-pay-later').should('have.value', 'buy-now-pay-later');
            cy.get('[data-test="monthly_installments"]').select('9').should('have.value', '9');
            cy.get('[data-test="finish"]').click();
            cy.get('.alert').should('be.visible');
            cy.get('[data-test="finish"]').click();
            cy.get('#order-confirmation').should('exist')


            // cy.get('#select2-discount_percentage-container').click();
            // cy.get('[id*="select2-discount_percentage-result-"]').eq(25).click();
            // cy.get('#next').click();

        })
    });
})