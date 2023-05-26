const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cordas_musicais', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;