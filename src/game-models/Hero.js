// Наш герой.

const { updateScores, inputPlayer, findUser, getScores } = require('../database');
const Boomerang = require('./Boomerang');

class Hero {
  constructor() {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = 1;
    this.boomerang = new Boomerang();
  }

  moveLeft() {
    // Идём влево.

    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  async die(name, score) {
    this.skin = '💀';
    if (await findUser(name)) {
      if (score > await getScores(name)) await updateScores(score, name);
    } else { await inputPlayer(name, score); }
  
    // console.log('')
    console.log('ПОТРАЧЕНО! 💀');

    process.exit();
  }
  // process.exit();
}

module.exports = Hero;
