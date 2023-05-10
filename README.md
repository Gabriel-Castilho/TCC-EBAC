# TCC-EBAC

Projeto de conclusão de curso de Teste de Software da EBAC https://ebaconline.com.br/qualidade-de-software.

Trabalho para exercitar todo o conceito aprendiddo no curso, como por exemplo:

* Critérios de aceitação e Histórias do usuário
* Fundamentos de testes
* Planejamento de testes
* Casos de teste
* Técnicas de testes ágeis
* Testes de UI
* Automação de UI utilizando Cypress
* Testes de API e de contrato
* Testes automatizados de API
* Integração contínua com Jenkins
* Testes de performance
* SQL e NOSQL básico

E software/frameworks aprendidos

* Cypress
* Apache Jmeter
* Postman
* MongoDB
* SQL
* Docker
* Appium
* Jenkins
* Cucumber / Gherkin

O arquivo com todo exercício pode ser visualizado no arquivo .doc na raiz dessa workspace.

E logo abaixo algumas evidências dos testes automatizados:

Automação de UI adicionando três itens no carrinho e validando se foram inseridos corretamente utilizando Cypress e o comando npx cypress run

https://user-images.githubusercontent.com/57070964/236648020-c27bc265-ea39-44c7-9975-3c478cdc21bd.mp4


Automação de API utilizando cypress, as validações foram feitas para:
1) Listar todos os cupons cadastrado usando autenticação
2) Deve mostrar erro ao tentar listar os cupons sem autenticação
3) Deve inserir um cupom com sucesso usando autenticação
4) Deve mostrar erro ao tentar cadastar um cupom sem autenticação
5) Deve mostrar erro ao tentar cadastrar um cupom com nome repetido

https://user-images.githubusercontent.com/57070964/236691023-6cb63b8d-cfab-45ec-b4fa-27e9aafd503b.mp4

Criado um job pipeline no Jenkins para executar os testes automatizados 

![image](https://user-images.githubusercontent.com/57070964/236693928-d77b4059-faa5-4bb5-acbd-d49640ec789b.png)
