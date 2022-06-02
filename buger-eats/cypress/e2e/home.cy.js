describe('Teste inicial', () => {
  it('Site deve estar online', () => {
    cy.visit('https://buger-eats.vercel.app/?_gl=1*1nkq6f4*_ga*MTAxNTU4NzQyNy4xNjU0MTk1MjQ4*_ga_37GXT4VGQK*MTY1NDE5NTMzOC4xLjEuMTY1NDE5NjIxNy4w')
    cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
  })
})
