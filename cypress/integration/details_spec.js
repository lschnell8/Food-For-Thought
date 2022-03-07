import { recipeData } from '../../src/assets/sampleData';

describe('Recipe Details', () => {

  it('Should display a header, the recipe name, an image, the ingredients, and the instructions', () => {
    cy.intercept(`http://localhost:3001/api/v1/recipes`, recipeData)
      .visit(`http://localhost:3000/`)
      .get("h1")
      .contains("Food For Thought")
      .get('[href="/recipe/4"] > .recipe-card')
      .click()
      .get(".recipe-details")
      .should("be.visible")
      .contains("h2", "Mediterranean Tuna Salad")
      .get('button')
      .should("be.visible")
      .get(".image-large")
      .should("be.visible")
      .get(".title-style > ul")
      .contains("li", "1 red bell pepper, finely diced")
      .get(".instructions > ol")
      .contains("li", 'Prep the red pepper, shallot and English cucumber as noted above.')
  })

});
