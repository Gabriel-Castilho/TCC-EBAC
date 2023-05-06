///<reference types ="cypress"/>

context('4.5.1 Automação de UI',()=>{
    /*
•	Crie um projeto de automação no Cypress;
•	Crie uma pasta chamada UI para os testes WEB da História de Usuário [US-0001] – Adicionar item ao carrinho;
•	Na automação deve adicionar pelo menos 3 produtos diferentes e validar se os itens foram adicionados com sucesso.
    */
beforeEach(()=>{
    cy.visit('/')
})

    it('Deve adicionar três produtos diferentes no carrinho e validar se foram adicionados',()=>{
        let quantity = Math.floor(Math.random() * (9 - 1) + 1);
        cy.addProductOnCart(0,"S","Green",quantity);
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain',quantity * 1)
        cy.addProductOnCart(8,"XL","Blue",quantity);
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain',quantity * 2)
        cy.addProductOnCart(0,"L","Red",quantity);
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain',quantity * 3)
    })

})