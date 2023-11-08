describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://front-cras.app.fslab.dev/')
  })

  it('Deve realizar o login com sucesso- cenário de  sucesso', () => {
    cy.get('input[type=email]').type('adelson.moreira7293298820@gmail.com')
    cy.get('input[type=password]').type('123')
    cy.get('button[type=submit]').click()
  })

  it('Deve retornar mensagem de erro devido usuário inválido  - cenário de insucesso', () => {
    cy.get('input[type=email]').type('luccas.teste@gmail.com')
    cy.get('input[type=password]').type('123')
    cy.get('button[type=submit]').click()
  })

  it('Deve retornar msg dos campos obrigatório para login - cenário de insucesso', () => {
    cy.get('button[type=submit]').click()
    cy.contains('O email é obrigatório').should('be.visible')
    cy.contains('A senha é obrigatória').should('be.visible')
  })

  it('Deve retornar mensagem de erro por senha ou usuário - cenário de insucesso', () => {
    cy.get('input[type=email]').type('adelson.moreira7293298820@gmail.com')
    cy.get('input[type=password]').type('1234')
    cy.get('button[type=submit]').click()
  })
})