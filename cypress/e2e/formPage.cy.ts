describe('forms Page', () => {
  it('should show forms page', () => {
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Forms page');
    cy.url().should('include', '/forms');
  });
  it('should pass a validation', () => {
    cy.visit('/forms');
    cy.get('.inputName').type('John');
    cy.get('.inputSurname').type('Doe');
    cy.get('.inputBirthday').type('1999-12-31');
    cy.get('.select').select('Latvia');
    cy.get('.inputCheckbox').check();
    cy.get('[type="radio"]').first().check();
    cy.get('input[type=file]').selectFile({
      contents: Cypress.Buffer.from('file contents'),
      fileName: 'file.png',
      mimeType: 'image/jpeg',
      lastModified: Date.now(),
    });
    cy.get('.submit').click();
    cy.contains('Card created successfully');
    cy.get('.elem');
    cy.contains('Card created successfully', { timeout: 4000 }).should('not.visible');
  });
  it('should show error message', () => {
    cy.visit('/forms');
    cy.get('.submit').click();
    cy.contains('Name is required');
    cy.contains('Surname is required');
    cy.contains('You must enter date');
    cy.contains('Please choose your country');
    cy.contains('Check to submit the form is required');
    cy.contains('Choose your gender');
    cy.contains('Choose avatar');
  });
});
