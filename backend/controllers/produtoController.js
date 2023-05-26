const Produto = require('../modells/produtoModell');

const getProdutos = (req, res) => {

  const produtos = [
    new Produto(1, 'Violino 4/4', 800, 'Um Violino de excelente qualidade de som'),
    new Produto(2, 'Violino 4/4', 1000, 'Para os mais exigentes musicos'),
    new Produto(3, 'Viola de Arco 40CM', 1200, 'Faça os melhores sons com um instrumento com o mais alto padrão de qualidade'),
    new Produto(4, 'Viola de Arco 42CM', 1200, 'Para musicos exigentes e profissionais'),
  ];

  res.json(produtos);
};

module.exports = {
  getProdutos,
};
