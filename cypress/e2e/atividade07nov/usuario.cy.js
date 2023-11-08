describe('Login', () => {
    beforeEach(() => {
        cy.visit('https://front-cras.app.fslab.dev/')
    })

    // it('Deve realizar realizar cadastro de um usuário com status ativo - cenário de sucesso', () => {
    //     cy.get('input[type=email]').type('adelson.moreira7293298820@gmail.com')
    //     cy.get('input[type=password]').type('123')
    //     cy.get('button[type=submit]').click()
    //     cy.get('img[alt="Abrir menu"]').click()
    //     cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/listar"] > .styles_containerLinkText__Rz0Qr').click()
    //     cy.get('.styles_buttonMenu__mmyUS > img').click()
    //     cy.get(':nth-child(5) > .styles_button__dr0t2').click()
    //     cy.get('#nomeCadastrar').type('Luccas')
    //     cy.get('#emailCadastrar').type('luccas.teste@gmail')
    //     cy.get('#senhaCadastrar').type('Cyb&R213')
    //     cy.get('#unidadeCadastrar').select('CRAS - Vilhena')
    //     cy.get('#grupoCadastrar').select('Padrão')
    //     cy.get('[type="submit"]').click()
    // })

    // it('Deve retornar as mensagem de validação dos campos obrigatórios - cenário de insucesso', () => {
    //     cy.get('input[type=email]').type('adelson.moreira7293298820@gmail.com')
    //     cy.get('input[type=password]').type('123')
    //     cy.get('button[type=submit]').click()
    //     cy.get('img[alt="Abrir menu"]').click()
    //     cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/listar"] > .styles_containerLinkText__Rz0Qr').click()
    //     cy.get('.styles_buttonMenu__mmyUS > img').click()
    //     cy.get(':nth-child(5) > .styles_button__dr0t2').click()
    //     cy.get('button[type=submit]').click()        
    // })

    // it('Deve retornar uma consulta do usurário cadastrado com status ativo - cenário de sucesso', () => {
    //     cy.get('input[type=email]').type('adelson.moreira7293298820@gmail.com')
    //     cy.get('input[type=password]').type('123')
    //     cy.get('button[type=submit]').click()
    //     cy.get('img[alt="Abrir menu"]').click()
    //     cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/listar"] > .styles_containerLinkText__Rz0Qr').click()
    //     cy.get('.styles_buttonMenu__mmyUS > img').click()
    //     cy.get('#nome').type('Luccas')
    //     cy.get(':nth-child(4) > .styles_button__dr0t2').click()
    // })

    // it('Deve atualizar os dados de um usuário - cenário de sucesso', () => {
    //     cy.get('input[type=email]').type('adelson.moreira7293298820@gmail.com')
    //     cy.get('input[type=password]').type('123')
    //     cy.get('button[type=submit]').click()
    //     cy.get('img[alt="Abrir menu"]').click()
    //     cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/listar"] > .styles_containerLinkText__Rz0Qr').click()
    //     cy.get('.styles_buttonMenu__mmyUS > img').click()
    //     cy.get('#nome').type('Luccas')
    //     cy.get(':nth-child(4) > .styles_button__dr0t2').click()
    //     cy.get('[alt="Atualizar usuário"]').eq(0).click()
    //     cy.get('[type="submit"]').click()
    // })

    it('Deve visualizar as informações de um usuário - cenário de sucesso', () => {
        cy.get('input[type=email]').type('adelson.moreira7293298820@gmail.com')
        cy.get('input[type=password]').type('123')
        cy.get('button[type=submit]').click()
        cy.get('img[alt="Abrir menu"]').click()
        cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/listar"] > .styles_containerLinkText__Rz0Qr').click()
        cy.get('.styles_buttonMenu__mmyUS > img').click()
        cy.get('#nome').type('Luccas')
        cy.get(':nth-child(4) > .styles_button__dr0t2').click()
        cy.get('[alt="Informação do usuário"]').eq(0).click()
    })

})