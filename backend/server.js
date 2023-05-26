const express = require('express');
const sequelize = require('./database');
const ProdutoModel = require('./modells/produtoModell');
const UsuarioModel = require('./modells/usuarioModell');
const CarrinhoModel = require('./modells/carrinhoModell');

const app = express();
const port = 3000;

// Configurações do Express
app.use(express.json()); // Permite o uso de JSON nas requisições

// Rotas
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// ...

// Conexão com o banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso');

    // Sincronize os modelos com o banco de dados
    sequelize.sync()
      .then(() => {
        console.log('Tabelas sincronizadas com sucesso');

        // Inicie o servidor
        app.listen(port, () => {
          console.log(`Servidor rodando na porta ${port}`);
        });
      })
      .catch((error) => {
        console.error('Erro ao sincronizar as tabelas:', error);
      });
  })
  .catch((error) => {
    console.error('Erro ao conectar-se ao banco de dados:', error);
  });
