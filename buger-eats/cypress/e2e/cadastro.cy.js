import SignupPage from "../pages/SignupPage"
import SignupFactory from "../factories/SignupFactory"
var signuppage = new SignupPage()

describe('Register', () => {
  it('User must become deliver', function() {
    let deliver = SignupFactory.deliver()
    const expectedmessageSucess = "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato."
    signuppage.go()
    signuppage.fillForm(deliver)
    signuppage.submit()
    signuppage.modalContentShouldBe(expectedmessageSucess)
  })

  it('Document was incorrect', function() {
    let deliver = SignupFactory.deliver()
    deliver.document = "A3290320-A342"
    const expectedAlertDocument = "Oops! CPF inválido"
    signuppage.go()
    signuppage.fillForm(deliver)
    signuppage.submit()
    signuppage.alertShouldBe(expectedAlertDocument)
  })

  it('Email was incorrect', function() {
    let deliver = SignupFactory.deliver()
    deliver.email = "jmc.com.br"
    const expectedMessageEmail = "Oops! Email com formato inválido."
    signuppage.go()
    signuppage.fillForm(deliver)
    signuppage.submit()
    signuppage.alertShouldBe(expectedMessageEmail)
  })
  it('Required fields', function(){
    signuppage.go()
    signuppage.submit()
    const requireName = "É necessário informar o nome"
    const requireDocument = "É necessário informar o CPF"
    const requireEmail = "É necessário informar o email"
    const requirePostalCode = "É necessário informar o CEP"
    const requireNumber = "É necessário informar o número do endereço"
    const requireMethod = "Selecione o método de entrega"
    const requireCNH = "Adicione uma foto da sua CNH"
    signuppage.alertShouldBe(requireName)
    signuppage.alertShouldBe(requireDocument)
    signuppage.alertShouldBe(requireEmail)
    signuppage.alertShouldBe(requirePostalCode)
    signuppage.alertShouldBe(requireNumber)
    signuppage.alertShouldBe(requireMethod)
    signuppage.alertShouldBe(requireCNH)

  })
})
