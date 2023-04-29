describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });

  it('show modal', () => {
    cy.visit('/');
    cy.get('.imgSmall').first().click();
    cy.get('.card').contains('Size');
    cy.get('.close').click();
    cy.get('.card').should('not.exist');
    cy.get('.imgSmall').last().click();
    cy.get('body').type('{esc}');
  });

  it('when empty value search', () => {
    cy.visit('/');
    cy.get('.searchInput').type('SDFGHJKL').type('{enter}');
    cy.contains('Nothing was found according to your request');
    cy.get('.searchInput').type('{selectAll}').type('{backspace}').type('car');
    cy.get('.btnSearch').click();
  });
});
