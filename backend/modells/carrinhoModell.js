const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Carrinho = sequelize.define('Carrinho', {
  produtoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Carrinho;

  