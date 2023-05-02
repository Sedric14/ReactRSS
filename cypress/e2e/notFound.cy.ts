describe('notFoundPage', () => {
  it('show nfPage', () => {
    cy.visit('/df');
    cy.contains('Not Found');
  });
});
