# Projeto Tagplus

Este repositório contém testes automatizados para o desafio Tagplus.

## Parte 2 Testes de Front-End

Site: https://www.saucedemo.com/

Automatize os seguintes fluxos:
  - Login com sucesso e com dados incorretos
    - Validação: sistema logado com sucesso e mensagem com erro
  - Remover produtos de dentro do carrinho
    - Validação: Quantidade de itens que sobrou no carrinho
  - Finalizar uma compra com 2 ou mais produtos
    - Validação: mensagem Thank you for your order!

 # 🧪 Testes End-to-End com Cypress

 Este projeto utiliza o [Playwright](https://playwright.dev/) na versão `^1.56.1` para testes de API.
 
 ## ⚙️ Pré-requisitos

- Node.js instalado (v16 ou superior recomendado)

 ## 🚀 Instalando as dependências

 Se ainda não instalou as dependências do projeto, rode:

 ```bash
  npm install -D @playwright/test - instação do playwright

  npx playwright install - instalação dos browsers 

  npm install dotenv - carrega variaveis de ambiente através do arquivo .env
 ```

 🔑 Pré-requisitos
  Criação de variavel de ambiente:
  
  Token de acesso
  - Crie um token pessoal no site GoRest (https://gorest.co.in/consumer/login).
  - Crie um arquivo no projeto com o nome .env e adicione a variavel GOREST_TOKEN e BASE_URL : 
  ```bash
    GOREST_TOKEN=tokenpessoal
    BASE_URL=https://gorest.co.in/public/v2
  ```
  
  ```bash
  npm install -D @playwright/test 

  npx playwright install
 ```
 
 ## ▶️ Como rodar os testes
 ```bash
	npx playwright test --ui - (interface gráfica)
	npx playwright test - (diretamente no terminal)
  ```

 ## 📁 Estrutura de Pastas
	
  ```bash
  A estrutura dos testes:
  ├── tests/
  │   └── users.spec.ts         # Testes de API (ex: /users)
  ├── .env                      # Variáveis de ambiente (TOKEN, BASE_URL)
  ├── .editorconfig             # Configuração de formatação
  ├── .prettierrc               # Padrões de estilo de código
  ├── .gitignore
  ├── package.json
  ├── package-lock.json
  └── playwright.config.ts      # Configuração do Playwright 
  ```
