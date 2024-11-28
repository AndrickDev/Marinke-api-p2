# Projeto de Gerenciamento de Contratos

Este projeto é uma aplicação que gerencia contratos, perfis e trabalhos utilizando **Node.js** e **SQLite**. Ele foi desenvolvido com **Sequelize** para facilitar a interação com o banco de dados.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado na sua máquina:

- **Node.js** (versão 14 ou superior)
- **NPM** (geralmente instalado junto com o Node.js)

## 🚀 Como Executar o Projeto

1. **Inicie o servidor**:
   ```bash
   npm start
   ```
2. O servidor estará rodando em `http://localhost:3000`.

## 🧪 Testando o Banco de Dados

Você pode verificar se os dados foram inseridos corretamente usando:
- **DB Browser for SQLite** (ou qualquer ferramenta de interface gráfica para SQLite).
- Linha de comando do SQLite:
  ```bash
  sqlite3 ./db.sqlite
  ```
  Depois, consulte as tabelas:
  ```sql
  SELECT * FROM Profiles;
  SELECT * FROM Contracts;
  SELECT * FROM Jobs;
  ```

## 🗂️ Estrutura do Projeto

```
├── scripts/
│   └── seedData.js        # Script para popular o banco de dados
├── src/
│   ├── config/            # Configurações (ex.: conexão com o banco)
│   ├── controllers/       # Controladores (lógica das rotas)
│   ├── models/            # Modelos do banco de dados
│   ├── routes/            # Arquivo de rotas da aplicação
│   ├── services/          # Serviços adicionais
├── db.sqlite              # Arquivo do banco de dados SQLite
├── .env                   # Variáveis de ambiente
├── server.js              # Arquivo principal do servidor
├── app.js                 # Configuração inicial do app
├── package.json           # Gerenciador de dependências e scripts
```

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript.
- **Sequelize**: ORM para interagir com o banco de dados.
- **SQLite**: Banco de dados leve e rápido.
- **dotenv**: Gerenciamento de variáveis de ambiente.

## ⚠️ Avisos

- Sempre rode o script `seedData.js` antes de iniciar o servidor para garantir que o banco de dados está populado com dados de exemplo.
- Caso queira resetar o banco, exclua o arquivo `db.sqlite` e rode novamente o script de seed.

## 🖊️ Autor

- **Andrick** - print(AndrickDev)[(https://github.com/AndrickDev)]
