describe('Cadastro', () => {
  it('Usuário deve se tornar um entregador', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://buger-eats.vercel.app/?_gl=1*1nkq6f4*_ga*MTAxNTU4NzQyNy4xNjU0MTk1MjQ4*_ga_37GXT4VGQK*MTY1NDE5NTMzOC4xLjEuMTY1NDE5NjIxNy4w')
    cy.get('a[href="/deliver"]').click()
    cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
  })
})
