# Redux Template
## Instalação

```bash
npm install
```

## Executando

Execute a fake API:

```bash
npm run server
```

Inicie o ambiente de desenvolvimento:

```bash
npm run start
```

Assim o projeto irá abrir no browser [http://localhost:3000](http://localhost:3000)

## Sobre Redux

As dependências básicas costuma ser: redux, react-redux e redux-saga (opcional).

Tudo relacionado a configuração do redux é salvo na pasta `store` (store é o state global).

o `Provider` deve ser configurado em volta do componente principal.

Estrutura de pastas e arquivos:
* modules: pasta que fica salvo cada serviço configurado para uso do Redux;
* products: é um exemplo de serviço utilizando Redux (dentro da pasta modules), nele existem 4 arquivos:
  * actions: funções que disparam ações, para alteração do estado na store;
  * reducer: define o que será será alterado no estado global da store através de cada action;
  * sagas: middleware que realiza side effects quando determinadas actions são disparadas;
  * types: constantes para padronizar os nomes utilizados no reducer, action e saga.
* rootSaga: engloba todas as requisições usando saga dos módulos;
* rootReducer: engloba todos os reducers dos módulos.

Cada componente pode:
* Fazer a leitura dos dados na store;
* Enviar ações para alterar a store.
