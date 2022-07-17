const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'boomerang',
  'boomerang',
  '8888',
  {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
  },
);

async function inputPlayer(player, score) {
  try {
    await sequelize.query(
      `INSERT INTO players (name, scorees)
        VALUES
        (?, ?);`,
      {
        replacements: [player, score],
      },
    );
    // console.log('Таблица обновлена!')
  } catch (error) {
    console.log(error.message);
  }
}

async function findUser(user) {
  try {
    const [res] = await sequelize.query(
      'SELECT * FROM players WHERE name = ?;',
      {
        replacements: [user],
      },
    );
    return (res.length);
  } catch (error) {
    console.log(error.message);
  }
}

async function getScores(name) {
  try {
    const [res] = await sequelize.query(
      'SELECT * FROM players WHERE name = ?',
      {
        replacements: [name],
      },
    );
    return (res[0].scorees);
   } catch (error) {
    console.log(error.message)
  }
}

async function updateScores(score, player) {
  try {
    await sequelize.query(
      'UPDATE Players SET scorees = ? WHERE name = ?;',
      {
        replacements: [score, player],
      },
    );
    // console.log('Таблица обновлена!')
  } catch (error) {
    console.log(error.message);
  }
}
// getScores('alex');
// findUser('Alex');
module.exports = {
  inputPlayer,
  updateScores,
  findUser,
  getScores,
};
