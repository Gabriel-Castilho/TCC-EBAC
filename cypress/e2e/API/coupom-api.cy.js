/// <reference types="cypress" />

describe ('Teste da API de cupom',()=>{

    let basicAuth ='Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
    let nameFixed = Math.floor(Math.random()*1000)

    

    it('Deve listar todos os cupons',()=>{
        cy.listCoupons(basicAuth).then(response=>{
            expect(response.status).to.equal(200)
        })
    })

    it('Deve dar erro ao tentar listar cupons sem autenticação',()=>{
        cy.listCoupons().then(response=>{
            expect(response.status).to.equal(401)
        })
    })

    it('Deve cadastrar um cupom com nome aleatório com sucesso',()=>{
        let nameCoupon = Math.floor(Math.random() * 100000)
        let discount = ["fixed_product","percent","fixed_cart"]
        let discountSort = Math.floor(Math.random() * (3-0)+0)
        let quantityDiscount = Math.floor(Math.random()* 100)
        cy.insertCoupon(basicAuth,`cupom${nameCoupon}`,`${quantityDiscount}`,`${discount[discountSort]}`,`Desconto de ${quantityDiscount} ${discount[discountSort]}`)
        .then(response=>{
            expect(response.status).to.equal(201)
        })
    })

    it('Deve cadastrar um cupom com nome fixo com sucesso',()=>{
        cy.insertCoupon(basicAuth,`${nameFixed}`,"20","percent","Cupom20")
        .then(response=>{
            expect(response.status).to.equal(201)
        })
    })

    it('Deve mostrar erro ao cadastrar um código repetido',()=>{
        let discount = ["fixed_product","percent","fixed_cart"]
        let discountSort = Math.floor(Math.random() * (3-0)+0)
        let quantityDiscount = Math.floor(Math.random()* 100)
        cy.insertCoupon(basicAuth,"cupom20121",`${quantityDiscount}`,`${discount[discountSort]}`,`Desconto de ${quantityDiscount} ${discount[discountSort]}`)
        .then(response=>{
            expect(response.status).to.equal(400)
            expect(response.body.message).to.equal("O código de cupom já existe")
        })
    })

    it('Deve mostrar erro ao cadastrar sem autenticação',()=>{
        let discount = ["fixed_product","percent","fixed_cart"]
        let discountSort = Math.floor(Math.random() * (3-0)+0)
        let quantityDiscount = Math.floor(Math.random()* 100)
        cy.insertCoupon("","cupom20121",`${quantityDiscount}`,`${discount[discountSort]}`,`Desconto de ${quantityDiscount} ${discount[discountSort]}`)
        .then(response=>{
            expect(response.status).to.equal(401)
            expect(response.body.message).to.equal("Desculpe, você não possui permissão para criar recursos.")
        })
    })
})