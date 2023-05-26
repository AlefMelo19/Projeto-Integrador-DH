<<<<<<< HEAD
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const ProdutoModel = sequelize.define('Produto', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

module.exports = ProdutoModel;
=======
class Produto {
    constructor(id, nome, preco, descricao) {
      this.id = id;
      this.nome = nome;
      this.preco = preco;
      this.descricao = descricao;
    }
  }
  
  module.exports = Produto;
>>>>>>> 91db8b0d814e3cd89dd35ee0b8c563b5870ffaa6
