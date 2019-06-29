## Documentação

### `Como rodar o projeto?`

1- Instale o Node (https://nodejs.org/en/download/)

2- Instale o Github (https://desktop.github.com/)

3- Instale o Mongo DB (https://www.mongodb.com/download-center#community)

4- Clone o Projeto através da URL https://github.com/kbrandaolira/orbita.git

5- Crie uma base de dados chamada orbita

6- Importe o arquivo solar_data.json que está dentro da pasta /backend/db_import (Utilizei o programa Studio 3T (https://studio3t.com/) pois tive problema ao tentar importar pelo Mongo Compass)

7- A conexão com o banco de dados é feita no arquivo app.js e a senha está no arquivo nodemon.js, ambas dentro da pasta /backend

8- Acesse as pastas de backend (porta 3001) e frontend (porta 3001) e rode o comando npm start para subir os projetos

## Backend: API

## Frontend: Componentes Existentes

### `Card`

Componente de que desenha um painel com a class card do bootstrap no qual recebe os parâmetros title e description.

### `Dashboard`

Responsável por renderizar o dashboard após o login do usuário, ele chama outros três componentes que são: InstallationsMade, HigherCostInstallation e ThreeMonthsMoreInstallations.

### `Footer`

Responsável por renderizar o Footer da aplicação.

### `Header`

Responsável por renderizar o Header da aplicação.

### `HigherCostInstallation`

Traz dentro de um Card o CEP que obteve a instalação com maior custo no estado do usuário logado.

### `InstallationsMade`

Traz dentro de um Card o número de instalações feitas no estado do usuário logado.

### `Login`

Componente responsável por renderizar a tela de login com opção de criação de conta.

### `NewAccount`

Modal chamado no componente de Login para o usuário criar sua conta.

### `PageNotFound`

Caso o usuário tente acessar uma página que não existe este componente será renderizado com erro 404.

### `ThreeMonthsMoreInstallations`

Traz dentro de um Card os três meses que mais tiveram instalações no estado do usuário logado.
