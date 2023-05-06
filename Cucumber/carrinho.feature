            #language:pt

            Funcionalidade: Adicionar item ao carrinho
            Como cliente da EBAC-SHOP
            Quero adicionar produtos no carrinho
            Para realizar a compra dos itens

            Contexto:
            Dado que eu escolha um produto no site

            Cenário: Limite no carrinho
            Quando eu terminar a escolha de um produto
            E clicar em ir para pagamento
            Então o sistema deve permitir somente a compra de dez produtos

            Cenário: Inserido mais de dez itens no carrinho
            Quando eu terminar a escolha de um produto
            E clicar em comprar
            E o carrinho conter mais de dez produtos
            Então deve retornar a mensagem "Somente é permitido a compra de 10 unidades por login"

            Cenário: Itens obrigatório
            Quando eu escolher um produto
            E Clicar no produto
            Então os campos de cor, tamanho, quantidade devem estar marcados como obrigatórios

            Cenário: Valor do carrinho maior que R$ 990,00
            Quando eu selecionar a cor e o tamanho e quantidade
            E clicar em comprar
            E o valor do carrinho for maior que R$990,00
            Então deve retornar a mensagem "Somente é permitido compra no valor menor ou igual de R$ 990,00 por login"

            Esquema do Cenário: Aplicando cupom de desconto no carrinho automaticamente
            Quando eu adicionar ou remover um produto do carrinho
            E clicar em comprar
            E o valor do carrinho atualizado for maior que <valor1> e menor que <valor2>
            Então  deve fazer <acao>
            Exemplos:
            | valor1 | valor2 | acao                                                                                  |
            | 0      | 200    | "Não deve aplicar cupom no carrinho"                                                  |
            | 200    | 600    | "Deve aplicar automaticamente no carrinho um cupom de 10% do valor total do carrinho" |
            | 600    | 990    | "Deve aplicar automaticamente no carrinho um cupom de 15% do valor total do carrinho" |


