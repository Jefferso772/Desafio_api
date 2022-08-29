<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->


## Descrição


```bash
Api com dois cruds.
NestJs e TypeORM com Banco Postgres
```

## Clone o repositório:

```bash
https://github.com/Jefferso772/Desafio_api.git
```

## Intalação

```bash
$ npm install
```

## Executar Aplicação

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Categoria

### Categoria (Create) [POST/categoria]


```bash

  + Attributes (object)
			 + "nome": Nome da categoria (String)
		 	 + "ordenacao": Como deseja a ordenacao (String) (DESC ou ASC)
			 + "descricao": Descricao da categoria
		
```

### Get por produto [GET/categoria/{id}produto]


```bash

+ Parametro
    + id Id da categoria
    
```

### Get [GET/categoria/]

```bash
"categoria": [...]
    
```

### Get Id [GET/categoria/{id}]


```bash
"categoria": {...}
    
```

### Editar (Update) [PUT/categoria/{id}]

```bash

  + Attributes (object)
			 + "nome": Nome da categoria (String)
		 	 + "ordenacao": Como deseja a ordenacao (String) (DESC ou ASC)
			 + "descricao": Descricao da categoria
		
```
```bash
 Response 200 "Message": "Atualizado com Sucesso"
     
```
```bash
 Response 404 {
	"statusCode": 404,
	"message": "Categoria com  o id {id} não cadastrado!!!",
	"error": "Not Found"
}
```

### Deletar (delete) [DELETE/categoria/{id}]
```bash
 Response 404 {
	"statusCode": 404,
	"message": "Categoria com id {id} nao cadastrado!",
	"error": "Not Found"
}
```
```bash
  Response 200 "Message": "Excluido"
     
```


## Produto

### Produto (Create) [POST/produto]

```bash
  + Attributes (object)
		  "titulo": (String),
		  "preco": (Number),
		  "descricao": (String),
	  	"categoria": (id da categoria que foi criado)
```
### Get [GET/produto/]

```bash
"produto": [...]
    
```

### Get Id [GET/produto/{id}]


```bash
"produto": {...}
    
```

### Editar (Update) [PUT/produto/{id}]


```bash
  + Attributes (object)
		  "titulo": (String),
		  "preco": (Number),
		  "descricao": (String),
	  	"categoria": (id da categoria que foi criado)
```

```bash
 Response 200 "Message": "Atualizado com Sucesso"
     
```
```bash
 Response 404 {
	"statusCode": 404,
	"message": "Produto com  o id {id} não cadastrado!!!",
	"error": "Not Found"
}
```
### Deletar (delete) [DELETE/produto/{id}]
```bash
 Response 404 {
	"statusCode": 404,
	"message": "Produto com id {id} nao cadastrado!",
	"error": "Not Found"
}
```
```bash
  Response 200 "Message": "Excluido"
     
```


## Exemplo no Insomnia
![Captura de tela 2022-08-28 223824](https://user-images.githubusercontent.com/73672968/187107649-da291c1d-31fc-4bcd-bdb9-363ef3fda885.png)
