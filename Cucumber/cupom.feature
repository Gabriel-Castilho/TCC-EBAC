#language:pt
Funcionalidade: Cupom

Como admin da EBAC-SHOP
Quero criar um serviço de cupom
Para poder listar e cadastrar os cupons

Contexto: Dado que eu crie um cupom

Cenário: Cupom com nome repetido
Quando eu criar um cupom com o nome "Cupom10"
E já existir um cupom com esse nome cadastrado
Então o sistema deve retornar uma mensagem "Já existe um cupom cadastrado com esse nome"

Cenário: Cupom de valor fixo
Quando eu cadastrar um cupom 
E selecionar o tipo de desconto fixo no valor de R$ 100,00
Então o desconto aplicado no carrinho será de R$100,00

Cenário: Cupom de valor porcentagem
Quando eu cadastrar um cupom
E selecionar o tipo de desconto por porcentagem no valor de 50%
Então o desconto aplicado no carrinho será de 50%
