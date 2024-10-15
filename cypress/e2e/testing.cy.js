describe('testing', () => {
	it('open myportoflio homepage', () => {
		cy.visit('http://localhost:3000/');
		cy.get('.text-name').should('contain', 'Krzysztof Kamiński'),
		cy.wait(1500);
		cy.get('.footer-p').scrollIntoView();
		cy.get('.input-one').click().should('contain', '').type('Testowy');
		cy.get('.input-two').click().should('contain', '').type('Zapis');
		cy.get('.input-three')
			.click()
			.should('contain', '')
			.type('fhsuidgfjsdkgfdsfgsjfgsjhfgsdjfhgskjfhgdjhkf');
		cy.get('.contact-btn').click()
	});
});
