// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require('keypress');
// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.
// console.log(hero);

class Keyboard {
  constructor(hero, boomerang) {
    this.hero = hero;
    this.boomerang = boomerang;
    this.keyboard = {
      z: () => hero.moveLeft(),
      x: () => hero.moveRight(),
      q: () => hero.attack(),
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
