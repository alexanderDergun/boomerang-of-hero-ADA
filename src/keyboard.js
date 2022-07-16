// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require('keypress');
const Boomerang = require('./game-models/Boomerang');
// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.
// console.log(hero);

class Keyboard {
  constructor(hero) {
    this.hero = hero;
    this.keyboard = {
      z: () => hero.moveLeft(),
      x: () => hero.moveRight(),
      space: () => {
        this.hero.boomerang.boomerangFly = true;
        this.hero.boomerang.position = this.hero.position;
       return setInterval(() => this.hero.boomerang.fly(), 100)
      }
    };
  }

  runInteractiveConsole() {
    keypress(process.stdin);
    process.stdin.on('keypress', (ch, key) => {
      if (key) {
        // Вызывает команду, соответствующую нажатой кнопке.
        if (key.name in this.keyboard) {
          this.keyboard[key.name]();
        }
        // Прерывание программы.
        if (key.ctrl && key.name === 'c') {
          process.exit();
        }
      }
    });
    process.stdin.setRawMode(true);
  }
}

module.exports = Keyboard;
