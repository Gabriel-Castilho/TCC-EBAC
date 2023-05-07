Cypress.Commands.add('addProductOnCart',(item,size,color,quantity)=>{
    cy.get('#primary-menu > .menu-item-629 > a').click();
    cy.get('[class="product-block grid"]').eq(item).click();
    cy.get(`[class="variable-item button-variable-item button-variable-item-${size}"]`).click();
    cy.get(`.button-variable-item-${color}`).click();
    cy.get('.input-text').clear().type(quantity);
    cy.get('.single_add_to_cart_button').click();
})


Cypress.Commands.add('listCoupons',(authorization)=>{
    cy.request({
        method: 'GET',
        url: '/wp-json/wc/v3/coupons',
        headers:{authorization: authorization},
       failOnStatusCode: false
    })
 
})

Cypress.Commands.add('insertCoupon',(authorization,code,ammount,discount_type,description)=>{
    cy.request({
        method:'POST',
        url:'/wp-json/wc/v3/coupons',
        headers:{authorization: authorization},
        body:{
            "code":code,
            "amount":ammount,
            "discount_type":discount_type,
            "description":description
        },
        failOnStatusCode:false
    })
})