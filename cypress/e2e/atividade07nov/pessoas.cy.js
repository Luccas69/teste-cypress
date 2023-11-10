describe("Pessoas", () => {
    beforeEach(() => {
        cy.visit('https://front-cras.app.fslab.dev/')
    })

    // it("Deve cadastrar pessoa com todos os campos preenchidos", () => {
    //     cy.get('input[type=email]').type('adelson.moreira7293298820@gmail.com')
    //     cy.get('input[type=password]').type('123')
    //     cy.get('button[type=submit]').click()
    //     cy.get('.styles_buttonMenu__mmyUS > img').click()
    //     cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"]').click()
    //     cy.get('.styles_buttonMenu__mmyUS > img').click()
    //     cy.get(':nth-child(4) > .styles_container__NSLBw > #buscar').click()
    //     cy.get('.styles_input__muvWS[name="nome"]').type('Luccas')
    //     cy.get('.styles_input__muvWS[name="cpf"]').type('039.885.342-85')
    //     cy.get('#nit').type('123456789')
    //     cy.get('.styles_input__muvWS[name="dataNascimento"]').type('2002-12-26')
    //     cy.get('#estrangeiro').type('Não')
    //     cy.get('#pais').type('Brasil')
    //     cy.get('#estado').type('Rondônia')
    //     cy.get('#cidade').type('Colorado do Oeste')
    //     cy.get('#bairro').type('Centro')
    //     cy.get('#logradouro').type('Rua Rio Grande do Sul')
    //     cy.get('#cep').type('76993-000')
    //     cy.get('#numero').type('4593')    
    //     cy.get('#telefone').type('69999999999')
    //     cy.get('#telefoneContato').type('69999999999')
    //     cy.get('[type="submit"]').click()

    // })

    // it('Deve retornar msg de campos obrigatórios', () => {
    //     cy.get('input[type=email]').type('adelson.moreira7293298820@gmail.com')
    //     cy.get('input[type=password]').type('123')
    //     cy.get('button[type=submit]').click()
    //     cy.get('.styles_buttonMenu__mmyUS > img').click()
    //     cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"]').click()
    //     cy.get('.styles_buttonMenu__mmyUS > img').click()
    //     cy.get(':nth-child(4) > .styles_container__NSLBw > #buscar').click()
    //     cy.get('[type="submit"]').click()
    //     cy.contains('Nome é obrigatório').should('be.visible')
    //     cy.contains('Data de nascimento é obrigatório').should('be.visible')
    // })

    it('Deve buscar uma pessoa pelo nome e alterar seus dados', () => {
        cy.get('input[type=email]').type('adelson.moreira7293298820@gmail.com')
        cy.get('input[type=password]').type('123')
        cy.get('button[type=submit]').click()
        cy.get('.styles_buttonMenu__mmyUS > img').click()
        cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"]').click()
        cy.get('.styles_buttonMenu__mmyUS > img').click()
        cy.get(':nth-child(1) > #nome').type('Luccas')
        cy.get(':nth-child(3) > .styles_container__NSLBw > #buscar').click()
      
    })

})