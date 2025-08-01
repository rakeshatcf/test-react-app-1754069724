describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to home page', () => {
    cy.url().should('include', '/');
    cy.get('[data-testid=layout-container]').should('be.visible');
  });

  it('should have working navigation links', () => {
    cy.get('nav').should('exist');
    cy.get('nav a').should('have.length.at.least', 1);
  });
});