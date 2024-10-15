describe('testing', () => {
	it('open myportoflio homepage', () => {
		cy.visit('http://localhost:3000/');
		cy.get('.text-name').should('contain', 'Krzysztof Kamiński'),
			cy.get('.nav-link').should('contain', 'Contact');
		cy.get('footer').scrollIntoView();
		cy.get('.input-one').click('.input-one').should('contain', '');
	});
});
