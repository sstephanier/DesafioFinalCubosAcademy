![](https://i.imgur.com/xG74tOh.png)

# Projeto Módulo 5 - Backend

<div align="center">
     <img src="https://github.com/leila-bwt/desafio-backend-m02-b2bt05/assets/108028195/c8c29bd0-c843-4cb8-9b20-9d1d8ed220b4" alt="javascript" height="50" width="40"/>&nbsp;
  <img src="https://github.com/leila-bwt/desafio-backend-m02-b2bt05/assets/108028195/190429a3-c73f-4511-acd5-81c587a98842" alt="node.js" height="45" width="40"/>&nbsp;
  <img src="https://github.com/leila-bwt/desafio-backend-m02-b2bt05/assets/108028195/653d97ba-8b6a-4280-bf00-9d2b6a196374" alt="insomnia" height="40" width="40"/>&nbsp;
  <img src="https://github.com/leila-bwt/DesafioII_API_REST_Cubos_Academi/assets/108028195/224daf50-36f6-457b-8d71-f80b3c6d0b96" alt="postgres" height="40" width="40"/>&nbsp;
     <img src="https://github.com/leila-bwt/desafio-backend-m02-b2bt05/assets/108028195/defd1a31-c91f-4a01-927d-6a968ea4c5d0" alt="git" height="40" width="40"/>&nbsp;
</div>

## Recursos e Tecnologias Utilizadas

- Node.js (versão: v18.14.1 )
- npm (gerenciador de pacotes do Node.js)
- Express.js
- Nodemon
- Insomnia
- Postgres
- Beekeeper


## Como Executar o Projeto

- `npm init` ou `npm init -y` : inicia o package.json;
- `npm pg`: conexão com banco de dados PostgreSQL;
- `.gitignore` : arquivos que serão ignorados durante o envio para o gitHub

- `npm run start` script ("node ./src/index.js") usado para chamar o nodemon que foi instalado com `npm install -D nodemon` para usar somente como depedência.

## Resumo das atividades realizadas 

<details>
<summary>1ª Sprint</summary>
<br>

Esta é a primeira sprint do projeto do PDV (Ponto de Venda) API, que consiste na criação de um sistema de frente de caixa. Nesta sprint, foram realizadas as seguintes tarefas:

### Banco de Dados

Foram criadas as seguintes tabelas e colunas no banco de dados:

### Tabela usuarios:

id (Chave primária)
nome
email (Deve ser único)
senha

### Tabela categorias:

id (Chave primária)
descricao


Listar Categorias

###  Rota: `GET /categoria`

Essa rota permite ao usuário listar todas as categorias cadastradas no sistema. Para o correto funcionamento da rota, as seguintes categorias precisam ser previamente cadastradas no sistema:

Informática
Celulares
Beleza e Perfumaria
Mercado
Livros e Papelaria
Brinquedos
Moda
Bebê
Games


Cadastrar Usuário

### Rota: `POST /usuario`

Essa rota permite o cadastro de um novo usuário no sistema. Para que o cadastro seja bem-sucedido, são aplicados os seguintes critérios de aceitação:

Validação dos campos obrigatórios: nome, email, senha.
A senha é criptografada usando um algoritmo de criptografia confiável.
O campo email no banco de dados deve ser único, evitando que dois usuários tenham o mesmo endereço de e-mail.
Efetuar Login do Usuário


### Rota: `POST /login`

Essa rota possibilita que um usuário cadastrado faça o login no sistema. Os critérios de aceitação são os seguintes:

Validação do e-mail e da senha para o usuário em questão.
Geração de um token de autenticação para o usuário.
A partir deste ponto, todas as funcionalidades (endpoints) requerem um token de autenticação do usuário logado, que deve ser enviado no header no formato Bearer Token. Portanto, em cada funcionalidade, a validação do token informado é necessária.



Detalhar Perfil do Usuário Logado
###  Rota: `GET /usuario`

Essa rota permite ao usuário logado visualizar o seu perfil no sistema.


Editar Perfil do Usuário Logado
### Rota: `PUT /usuario`

Essa rota permite ao usuário logado editar as informações do seu perfil no sistema.

</details>

<details>
<summary>2ª Sprint</summary>

### Cadastrar Produto
 - Descrição: Para cadastrar novos produtos.
###  Editar Dados do Produto
 - Descrição: Para permitir a edição de dados de um produto existente.
### Listar Produtos
 - Descrição: Lista todos os produtos cadastrados.
###  Detalhar Produto
 - Descrição: Fornece detalhes de um produto específico.
###  Excluir Produto por ID
 - Descrição: Para permitir a exclusão de um produto por seu ID.
### Cadastrar Cliente
 - Descrição: Para cadastrar novos clientes.
###  Editar Dados do Cliente
 - Descrição: Para permitir a edição de dados de um cliente existente.
### Listar Clientes
 - Descrição: Lista todos os clientes cadastrados.
###  Detalhar Cliente
Descrição: Fornece detalhes de um cliente específico.   
</details>

<details>
<summary>3ª Sprint</summary>


### Cadastrar Pedido
 - Descrição: Para cadastrar novos pedidos.
### Listar Pedidos
 - Descrição: Lista todos os pedidos cadastrados.
### Aplicar Validação na Exclusão de Produto
 - Descrição: Valida se um produto está vinculado a um pedido em aberto antes de permitir a exclusão.
### Aprimorar Cadastro/Atualização de Produto
 - Descrição: Aprimora as operações de cadastro e atualização de produtos.
### Aprimorar Exclusão de Produto
 - Descrição: Aprimora a operação de exclusão de produtos para remover imagens vinculadas no servidor de armazenamento.

</details>

## Deploy da Aplicação

Essa é uma tarefa que deve ser realizada para disponibilizar a aplicação em um ambiente de produção.
- Link do Deploy: https://app.cyclic.sh/#/deploy/leila-bwt/EquipeLetsGoDesafioM05

## Integrantes do Grupo

- Leila Borges - https://github.com/leila-bwt
- Stephanie Rodrigues  - https://github.com/sstephanier
- Stephanie Feliciano - https://github.com/Stephanie-Feliciano
- Sthefany Silva - https://github.com/sthefany0011
- Glaudia Almeida - https://github.com/glaudiaalmeida


###### tags: `back-end` `módulo 5` `nodeJS` `PostgreSQL` `API REST` `desafio`
