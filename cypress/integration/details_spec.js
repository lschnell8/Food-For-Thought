describe('Recipe Details', () => {

  it('Should display a header, the recipe name, an image, the ingredients, and the instructions', () => {
    cy.visit(`http://localhost:3000/`)
      .contains("h1", "Food For Thought - Eat, Don't Die")

      .get(".recipe-details")
      .should("be.visible")
      .contains("h2", "Mediterranean Tuna Salad")
      .get('input[type="search"]')
      .should("not.be.visible")
      .get(".image-large")
      .should("be.visible")
      .get(".ingredients")
      .contains("li", "1 red bell pepper, finely diced")
      .get(".instructions")
      .contains("li", "Bring to a simmer. Simmer for 22 to 25 minutes until the lentils are tender.")
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

  it('Should', () => {
    
  })

  it('Should', () => {
    
  })

});