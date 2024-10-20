describe('opening_pages', () => {
	it('opens all pages', () => {
		cy.visit('http://localhost:3000/');
		cy.wait(1500);
		cy.get('.nav-link').contains('Portfolio').click();
		cy.get('.portfolio-btn');
	});
});
