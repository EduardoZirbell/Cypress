describe('Register', () => {
  it('User must become deliver', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://buger-eats.vercel.app/?_gl=1*1nkq6f4*_ga*MTAxNTU4NzQyNy4xNjU0MTk1MjQ4*_ga_37GXT4VGQK*MTY1NDE5NTMzOC4xLjEuMTY1NDE5NjIxNy4w')
    cy.get('a[href="/deliver"]').click()
    cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    let deliver = {
      name: "Eduardo Zirbell",
      document: "10228297931",
      email: "eduardozirbell26@gmail.com",
      whatsapp: "47992570433",
      delivery_method: "Bicicleta",
      cnh: "images/cnh-digital.jpg",
      address: {
        postal_code: "89041760",
        street: "Rua José Ramos",
        number: "126",
        details: ".",
        district: "Salto Weissbach",
        city_state: "Blumenau/SC"
      }
    }
    cy.get('input[name="name"]').type(deliver.name)
    cy.get('input[name="cpf"]').type(deliver.document)
    cy.get('input[name="email"]').type(deliver.email)
    cy.get('input[name="whatsapp"]').type(deliver.whatsapp)
    cy.get('input[name="postalcode"]').type(deliver.address.postal_code)
    cy.get('input[type="button"][value="Buscar CEP"').click()
    cy.get('input[name="address-number"]').type(deliver.address.number)
    cy.get('input[name="address-details"]').type(deliver.address.details)
    cy.get('input[name="address"]').should('have.value', deliver.address.street)
    cy.get('input[name="district"]').should('have.value', deliver.address.district)
    cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)
    cy.contains('.delivery-method li', deliver.delivery_method).click()
    // ^ serve para encontrar algo no início de uma propriedade
    // $ serve para encontrar algo no fim de uma propriedade
    // * serve para encontrar algo em qualquer lugar de uma propriedade
    cy.get('input[accept="image/*"').attachFile(deliver.cnh)
    cy.get('form button[type="submit"').click()

    const expectedMessage = "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato."

    cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage)
  })

  it('Document was incorrect', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://buger-eats.vercel.app/?_gl=1*1nkq6f4*_ga*MTAxNTU4NzQyNy4xNjU0MTk1MjQ4*_ga_37GXT4VGQK*MTY1NDE5NTMzOC4xLjEuMTY1NDE5NjIxNy4w')
    cy.get('a[href="/deliver"]').click()
    cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    let deliver = {
      name: "Eduardo Zirbell",
      document: "A32031B032A",
      email: "eduardozirbell26@gmail.com",
      whatsapp: "47992570433",
      delivery_method: "Bicicleta",
      cnh: "images/cnh-digital.jpg",
      address: {
        postal_code: "89041760",
        street: "Rua José Ramos",
        number: "126",
        details: ".",
        district: "Salto Weissbach",
        city_state: "Blumenau/SC"
      }
    }
    cy.get('input[name="name"]').type(deliver.name)
    cy.get('input[name="cpf"]').type(deliver.document)
    cy.get('input[name="email"]').type(deliver.email)
    cy.get('input[name="whatsapp"]').type(deliver.whatsapp)
    cy.get('input[name="postalcode"]').type(deliver.address.postal_code)
    cy.get('input[type="button"][value="Buscar CEP"').click()
    cy.get('input[name="address-number"]').type(deliver.address.number)
    cy.get('input[name="address-details"]').type(deliver.address.details)
    cy.get('input[name="address"]').should('have.value', deliver.address.street)
    cy.get('input[name="district"]').should('have.value', deliver.address.district)
    cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)
    cy.contains('.delivery-method li', deliver.delivery_method).click()
    // ^ serve para encontrar algo no início de uma propriedade
    // $ serve para encontrar algo no fim de uma propriedade
    // * serve para encontrar algo em qualquer lugar de uma propriedade
    cy.get('input[accept="image/*"').attachFile(deliver.cnh)
    cy.get('form button[type="submit"').click()

    cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')
  })
})
