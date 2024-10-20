describe('open_links', () => {
	it('open different links', () => {
		cy.visit('http://localhost:3000/');
		cy.get('.text-name');
		cy.get('.icon-box');
		cy.get('.github-link').click();
		cy.wait(2000);
		cy.get('.linkedin-link').click();
		cy.get('.footer').scrollIntoView();
		cy.wait(1000);
		cy.get('#scrollToTop').get('.go-up-arrow').click()
	});
});
