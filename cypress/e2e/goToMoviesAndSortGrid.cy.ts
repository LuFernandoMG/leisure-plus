describe('General E2E Test', () => {
  it('Go to Movies', () => {
    cy.visit('localhost:3000/')
    cy.contains('Movies').click()

    // Check if we are in the movies page
    cy.url().should('include', '/movies')

    // Check if the movies are sorted by genres and change to Grid view
    cy.get('checkbox').click()

    // Check if the movies are displayed in a grid view
    cy.get('movies__grid').should('exist')

    // Sort the movies by popularity
    cy.get('select').select('popularity.desc')
  })
})