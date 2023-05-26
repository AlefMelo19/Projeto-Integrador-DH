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
