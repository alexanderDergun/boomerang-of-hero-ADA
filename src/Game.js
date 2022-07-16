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
    this.keyboard = new Keyboard(this.hero);
    this.count = 0;
    this.timer = 0;
  }

  // timeCount() {
  //  let r = setInterval(() => { this.timer + 1 }, 1000)
  //   return r;
  // }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных

    this.track = (new Array(this.trackLength)).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.hero.boomerang.position] = this.hero.boomerang.skin;
    this.track[this.enemy.position] = this.enemy.skin;

    // console.log(this.track);
  }

  check() {
    if (this.hero.position >= this.enemy.position + 1) {
      this.enemy.skin = ' '
      // console.log(this.enemy.skin);
      this.hero.skin = '💀'
      this.hero.die();


      // this.hero.boomerang.moveLeft();
      // this.enemy = new Enemy();
    }
    if (this.hero.position > this.hero.boomerang.position) {
      this.hero.boomerang.position = this.hero.position - 1
    }

    if (this.enemy.position <= this.hero.boomerang.position) {
      // this.hero.boomerang.moveLeft();
      this.hero.boomerang.boomerangFly = false;
      this.enemy = new Enemy();
      this.count += 1;
      // this.enemy.die();
    }
  }


  play() {
    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
      this.view.displayCount(this.count);
     this.enemy.moveLeft();
     this.view.timeCount(this.timer)

    }, 100);
    // this.view.timeCount(this.timer);

    this.keyboard.runInteractiveConsole();
  }
}

module.exports = Game;
