const { sequelize } = require('../db/models');

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Соединение с БД установлено');
  } catch (error) {
    console.log('Не удалось подключиться к БД');
    console.log(error.message);
  }
}

class User extends Sequelize.Model {}

testConnection();
module.exports = testConnection;
