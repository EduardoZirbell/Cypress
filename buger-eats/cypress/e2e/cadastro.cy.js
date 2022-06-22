import SignupPage from "../pages/SignupPage"
var signuppage = new SignupPage()
describe('Register', () => {
  it('User must become deliver', () => {
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
    const expectedMessageSucess = "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato."
    signuppage.go()
    signuppage.fillForm(deliver)
    signuppage.submit()
    signuppage.modalContentShouldBe(expectedMessageSucess)
  })

  it('Document was incorrect', () => {
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
    const expectedMessageDocument = "Oops! CPF inválido"
    signuppage.go()
    signuppage.fillForm(deliver)
    signuppage.submit()
    signuppage.alertDocumentShouldBe(expectedMessageDocument)
  })
})
