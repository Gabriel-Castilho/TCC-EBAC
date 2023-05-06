            #language:pt
            Funcionalidade: Login

            Como cliente da EBAC-SHOP
            Quero fazer o login (autenticação) na plataforma
            Para visualizar meus pedidos


            Contexto: Dado que eu acesse a página de autenticação da loja EBAC

            Esquema do Cenário: Dados válidos
            Quando eu digitar o usuário <usuario>
            E a senha <senha>
            Então o sistema deve fazer a <acao>
            Exemplos:
            | usuario                      | senha          | mensagem                                    |
            | "gabriel_valido@ebac.com.br" | "senhaCorreta" | "redirecionar para a página de minha conta" |
            | "gabriel_valido"             | "senhaCorreta" | "redirecionar para a página de minha conta" |
            | "456.323.420-69"             | "senhaCorreta" | "redirecionar para a página de minha conta" |

            Esquema do Cenário: Dados de autenticação inválido
            Quando eu digitar o usuário <usuario>
            E a senha <senha>
            Então o sistema deve exibir a <mensagem>

            Exemplos:
            | usuario                      | senha             | mensagem                     |
            | gabriel.invalido@ebac.com.br | "senhaCorreta"    | "Usuário ou senha inválidos" |
            | "gabriel.valido@ebac.com.br" | "senhaIncorreta " | "Usuário ou senha inválidos" |
            | "gabriel_valido"             | "senhaInCorreta"  | "Usuário ou senha inválidos" |
            | "456.323.420-69"             | "senhaIncorreta"  | "Usuário ou senha inválidos" |


            Esquema do Cenário: Travar usuário correto depois de 3 tentativas de login com senha errada
            Quando eu digitar o usuário <usuario>
            E a senha <senha>
            E fazer <numero> tentativas
            Então o sistema deve bloquear o acesso do usuário por 15 minutos
            Exemplos:
            | usuario                      | senha            | numero |
            | "gabriel.valido@ebac.com.br" | "senhaIncorreta" | 3      |
            | "gabriel_valido"             | "senhaInCorreta" | 3      |
            | "456.323.420-69"             | "senhaIncorreta" | 3      |