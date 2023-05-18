const express = require('express');
const app = express();
const produtoRoutes = require('./routes/produtoRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const carrinhoRoutes = require('./routes/carrinhoRoutes');

app.use(express.json());

app.use('/api', produtoRoutes);
app.use(usuarioRoutes);
app.use(carrinhoRoutes);

const port = 3000; 
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
