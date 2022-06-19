describe('Cadastro', () => {
  it('Usuário deve se tornar um entregador', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://buger-eats.vercel.app/?_gl=1*1nkq6f4*_ga*MTAxNTU4NzQyNy4xNjU0MTk1MjQ4*_ga_37GXT4VGQK*MTY1NDE5NTMzOC4xLjEuMTY1NDE5NjIxNy4w')
    cy.get('a[href="/deliver"]').click()
    cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    let entregador = {
      nome: "Eduardo Zirbell",
      cpf: "102.282.979-31",
      email: "eduardozirbell26@gmail.com",
      whatsapp: "47992570433",
      metodo_entrega: "Bicicleta",
      cnh: "images/cnh-digital.jpg",
      endereco: {
        cep: "89041760",
        rua: "Rua José Ramos",
        numero: "126",
        complemento: ".",
        bairro: "Salto Weissbach",
        cidade_uf: "Blumenau/SC"
      }
    }
    cy.get('input[name="name"]').type(entregador.nome)
    cy.get('input[name="cpf"]').type(entregador.cpf)
    cy.get('input[name="email"]').type(entregador.email)
    cy.get('input[name="whatsapp"]').type(entregador.whatsapp)
    cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
    cy.get('input[type="button"][value="Buscar CEP"').click()
    cy.get('input[name="address-number"]').type(entregador.endereco.numero)
    cy.get('input[name="address-details"]').type(entregador.endereco.complemento)
    cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
    cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
    cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)
    cy.contains('.delivery-method li', entregador.metodo_entrega).click()
    // ^ serve para encontrar algo no início de uma propriedade
    // $ serve para encontrar algo no fim de uma propriedade
    // * serve para encontrar algo em qualquer lugar de uma propriedade
    cy.get('input[accept="image/*"').attachFile(entregador.cnh)
    cy.get('button[type="submit"').click()
  })
})
