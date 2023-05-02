describe('to About Page', () => {
  it('change about page', () => {
    cy.visit('/');
    cy.contains('About').click();
    cy.contains('About page');
    cy.url().should('include', '/about');
  });
});
