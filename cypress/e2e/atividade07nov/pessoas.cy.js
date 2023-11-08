describe("Pessoas", () => {
    beforeEach(() => {
        cy.visit('https://front-cras.app.fslab.dev/')
    })

    it("Deve cadastrar pessoa com todos os campos preenchidos", () => {
        cy.get('input[type=email]').type('adelson.moreira7293298820@gmail.com')
        cy.get('input[type=password]').type('123')
        cy.get('button[type=submit]').click()
        cy.get('.styles_buttonMenu__mmyUS > img').click()
        cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"]').click()
        cy.get('.styles_buttonMenu__mmyUS > img').click()
        cy.get(':nth-child(1) > #nome').type('teste')
        cy.get(':nth-child(2) > #nome').type('039.885.342-85')
        cy.get(':nth-child(4) > .styles_container__NSLBw > #buscar').click()
    })

})