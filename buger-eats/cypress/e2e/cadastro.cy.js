import SignupPage from "../pages/SignupPage"
var signuppage = new SignupPage()
describe('Register', () => {
  beforeEach(function(){
    cy.fixture('deliver').then((deliver)=>{
      this.deliver = deliver
    })
  })
  it('User must become deliver', function() {
    
    const expectedMessageSucess = "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato."
    signuppage.go()
    signuppage.fillForm(this.deliver.signup)
    signuppage.submit()
    signuppage.modalContentShouldBe(expectedMessageSucess)
  })

  it('Document was incorrect', function() {

    const expectedMessageDocument = "Oops! CPF inválido"
    signuppage.go()
    signuppage.fillForm(this.deliver.documentInv)
    signuppage.submit()
    signuppage.alertDocumentShouldBe(expectedMessageDocument)
  })
})
