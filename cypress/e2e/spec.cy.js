describe('testing', () => {
	it('open myportoflio homepage', () => {
		cy.visit('https://kaminskikrzysztof.github.io/My-Portoflio/');
		cy.get('.text-name').should('contain', 'Krzysztof Kamiński'),
			cy.get('.nav-link').should('contain', 'Contact');
		cy.get('footer').scrollIntoView();
		cy.get('.input-one');
	});
});
