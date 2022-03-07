describe('Landing page', () => {

  it('Should display a heading, a form, and recipe cards', () => {
    // cy.intercept("GET", `API URL`)
    cy.visit(`http://localhost:3000/`)
      .contains("h1", "Food For Thought - Eat, Don't Die")
      .get('input[type="search"]')
      .should("be.visible")
      .type('abcde')
      .should('have.value', 'abcde')
      .get('.recipe-dispaly')
      .should('be.visible')
      .get('.recipe-card')
      .should('be.visible')
  })

  it('Should show an error message if the page fails to load', () => {
    
  })

  it('Should display a message telling the user that their input entry does not match any of the recipes', () => {
    
  })

  it('Should', () => {
    
  })

  it('Should', () => {
    
  })

  it('Should', () => {
    
  })

  it('Should', () => {
    
  })

  it('Should', () => {
    
  })

  it('Should', () => {
    
  })

});