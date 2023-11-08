describe('tipo de atendimento', () => {
    beforeEach(() => {
        cy.visit('https://front-cras.app.fslab.dev/')
    })

    it("Deve cadastrar tipo de atendimento com todos os campos preenchidos", () => {
        cy.get('input[type=email]').type('adelson.moreira7293298820@gmail.com')
        cy.get('input[type=password]').type('123')
        cy.get('button[type=submit]').click()
        cy.get('.styles_buttonMenu__mmyUS > img').click()
        cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/tipo"]').click()
        cy.get('.styles_buttonMenu__mmyUS > img').click()
        cy.get(':nth-child(3) > .styles_container__NSLBw > #buscar').click()
        cy.get('#nome').type('teste')
        cy.get('[type="submit"]').click()

    })

    it("Deve retornar msg de campos obrigatório", () => {
        cy.get('input[type=email]').type('adelson.moreira7293298820@gmail.com')
        cy.get('input[type=password]').type('123')
        cy.get('button[type=submit]').click()
        cy.get('.styles_buttonMenu__mmyUS > img').click()
        cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/tipo"]').click()
        cy.get('.styles_buttonMenu__mmyUS > img').click()
        cy.get(':nth-child(3) > .styles_container__NSLBw > #buscar').click()
        cy.get('[type="submit"]').click()
        cy.contains('Nome é obrigatório').should('be.visible')
    })

    it("Deve pesquisar um tipo de atendimento e alterar seu nome", () => {
        cy.get('input[type=email]').type('adelson.moreira7293298820@gmail.com')
        cy.get('input[type=password]').type('123')
        cy.get('button[type=submit]').click()
        cy.get('.styles_buttonMenu__mmyUS > img').click()
        cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/tipo"]').click()
        cy.get('.styles_buttonMenu__mmyUS > img').click()
        cy.get('#tipo').type('teste')
        cy.get(':nth-child(2) > .styles_container__NSLBw > #buscar').click()
        cy.get('[alt="Editar tipo de atendimento"]').click()
        cy.get('#nome').type('testado')
        cy.get('[type="submit"]').click()
    })
})