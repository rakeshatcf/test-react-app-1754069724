describe('App E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('completes main user journey', () => {
    cy.findByRole('link', { name: /home/i }).click();
    cy.url().should('include', '/');
    cy.findByRole('heading', { name: /home/i }).should('exist');
  });

  it('handles 404 routes gracefully', () => {
    cy.visit('/non-existent');
    cy.findByText(/page not found/i).should('exist');
  });
});