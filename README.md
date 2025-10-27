# Projeto Tagplus

Este repositório contém testes automatizados para o desafio Tagplus.

## Parte 1 - Testes de API (GoRest)

Site: https://gorest.co.in/

Teste os seguintes verbos e endpoints: GET/POST/PUT/DELETE
  - /users ✅
  - /posts ❌
  - /comments ❌

Valide status code, estrutura dos dados, e que o registro criado aparece no GET
subsequente.

 ## 🧪 Testes API com Playwright

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

 ## 🔑 Pré-requisitos
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

## Legenda
✅ Concluído  
❌ Não feito / precisa implementar
🚧 Em andamento
