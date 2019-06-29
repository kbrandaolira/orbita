## Documentação

### `Como rodar o projeto?`

1- Instale o Node (https://nodejs.org/en/download/).

2- Instale o Github (https://desktop.github.com/).

3- Instale o Mongo DB (https://www.mongodb.com/download-center#community).

4- Clone o Projeto através da URL https://github.com/kbrandaolira/orbita.git.

5- Crie uma base de dados chamada orbita

6- Importe o arquivo solar_data.json que está dentro da pasta /backend/db_import (Utilizei o programa Studio 3T (https://studio3t.com/) pois tive problema ao tentar importar pelo Mongo Compass).

7- A conexão com o banco de dados é feita no arquivo app.js e a senha está no arquivo nodemon.js, ambas dentro da pasta /backend.

8- Acesse as pastas de backend (porta 3001) e frontend (porta 3000) e rode o comando npm start para subir os projetos.

## Backend: API

### `post /users/login`

Exemplo de Resposta:

```json
```

### `get /users`

Exemplo de Resposta:

```json
{
    "count": 2,
    "users": [
        {
            "_id": "5d12d23712c57903782f182c",
            "name": "KAYAN BRANDAO LIRA",
            "password": "$2b$10$GbpOSxEog34ywViKdLS3C.pxAm3UnWf3NjhPSJ9Am7lQJZeyaa4fq",
            "email": "kbrandaolira@gmail.com"
        },
        {
            "_id": "5d151f2ba98d7936445b4711",
            "name": "Natacha Salvador",
            "password": "$2b$10$zFnivKMAze1E0TT22TRhR.kM.Ud2/1xPOjnTN8F0gBQL7cTXmaL3S",
            "email": "ncastelhano@gmail.com"
        }
    ]
}
```

### `post /users`

Exemplo de Requisição:

```json
{
	"name":"Kayan Brandão Lira",
	"email":"kbrandaolira@gmail.com",
	"password":"12345678",
	"state":"CA"
}
```

Exemplo de Resposta:

```json
{
    "message": "User created",
    "userCreated": {
        "_id": "5d17b379461fe72cb85ac95f",
        "name": "Kayan Brandão Lira",
        "password": "$2b$10$hp5AIQD8TU14i4mocCb0Butaw91YZG2I68FJJziIXdikCdL7g837G",
        "email": "kbrandaolira@gmail.com",
        "state": "RJ",
        "__v": 0
    }
}
```

### `get /users/:userId

Exemplo de Resposta:

```json
```

### `get /installations/count/:userId`

Exemplo de Resposta:

```json
```

### `get /installations/higher-cost/:userId`

Exemplo de Resposta:

```json
```

### `get /installations/by-month/:userId`

Exemplo de Resposta:

```json
```

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
