// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
// const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const Keyboard = require('./keyboard');
// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    // this.hero = new Hero(); // Герою можно аргументом передать бумеранг.
    this.hero = new Hero({ position: 5 }); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy();
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
    this.keyboard = new Keyboard(this.hero)
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных

    this.track = (new Array(this.trackLength)).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    // console.log(this.track);
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
      // this.enemy = new Enemy();
    }
    if (this.enemy.position === 0) {
      this.enemy = new Enemy();
    }
  }

  play() {
    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
      console.log(this.enemy);
      console.log(this.hero);
      this.enemy.moveLeft();
      // this.hero.moveRight();
    }, 150);
    this.keyboard.runInteractiveConsole();
  }
}

module.exports = Game;
