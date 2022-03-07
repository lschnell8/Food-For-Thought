import { recipeData } from '../../src/assets/sampleData';

describe('Landing page', () => {

  it('Should display a heading, a form, and recipe cards', () => {
    cy.intercept(`http://localhost:3001/api/v1/recipes`, recipeData)
      .visit(`http://localhost:3000/`)
      .get("h1")
      .contains("Food For Thought")
      .get('input[type="search"]')
      .should("be.visible")
      .type('abcde')
      .should('have.value', 'abcde')
      .get('.recipe-display')
      .should('be.visible')
      .get('.recipe-card')
      .should('be.visible')
  })
  
  it('Should display a 404 page when there is an undefined route', () => {
    let URL = `http://localhost:3001/api/v1/recipes`
    cy.intercept('GET', URL,
    {
      statusCode: 404,
      ok: false
    })
      .visit("http://localhost:3000/t")
      .contains("h2", `Error 404: Sorry, you've either "fat fingered" your keyboard or intentionally requested information we don't have. Please refresh and try again.`);
  })
  
  it('Should show an error message if the page fails to load', () => {
    let sadURL = `http://localhost:3001/api/v1/recipess`
    cy.intercept('GET', sadURL,
    {
      statusCode: 500,
      ok: false
    })
      .visit("http://localhost:3000/")
      .get('h2')
      .should('exist')
  })
  
});

