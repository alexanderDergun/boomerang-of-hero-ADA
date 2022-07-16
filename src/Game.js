// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
// const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const runInteractiveConsole = require('./keyboard');
// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
<<<<<<< HEAD
    this.hero = new Hero(); // Герою можно аргументом передать бумеранг.
=======
    this.hero = new Hero({ position: 5 }); // Герою можно аргументом передать бумеранг.
>>>>>>> origin/dev
    this.enemy = new Enemy();
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных

    this.track = (new Array(this.trackLength)).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
<<<<<<< HEAD
    this.track[this.enemy.position] = this.enemy.skin;
=======
    console.log(this.track);
>>>>>>> origin/dev
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
  }

  play() {
    runInteractiveConsole(this.hero);
    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
<<<<<<< HEAD
      // this.hero.moveLeft();
      // this.hero.moveRight();
      // this.hero.attack();
      // this.hero.die();
      
  
=======
    }, 100);
>>>>>>> origin/dev
  }
}

module.exports = Game;
