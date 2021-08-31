describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('arithmetical operations update the display with the result of the operation', () => {
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '10')
  })

  it('multiple operations can be chained together', () => {
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '15')
  })

  it('should give an output for decimals', () => {
    cy.get('#number5').click();
    cy.get('#decimal').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#decimal').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '10.4')
  })

  it('should return error when dividing by 0', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Error')
  })

})