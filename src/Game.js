// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const View = require('./View');
const Keyboard = require('./keyboard');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdin,
})
// const inputPlayer = require('./database');
// const updateScores = require('./database');
// const findUser = require('./database');
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
  }

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
    if (this.hero.position > this.enemy.position) {
      this.enemy.skin = '💀';
      this.enemy.position = this.hero.position;
      this.die = true;
      console.log(this.player, this.count);
      this.hero.die(this.player, this.count);
    }

    if (this.enemy.position <= this.hero.boomerang.position) {
      this.hero.boomerang.boomerangFly = false;
      this.hero.boomerang.fly();
      this.enemy.die();
      this.count += 1;
      this.enemy = new Enemy();
    }

    if (this.hero.boomerang.position < this.hero.position) {
      this.hero.boomerang.position = this.hero.position - 1;
    }
  }

  checkName() {
    return new Promise((res) => {
      rl.question('ВВЕДИ ИМЯ: ', (answer) => res(answer));
    });
  }

  async play() {
    this.player = await this.checkName();
    setInterval(() => {
      this.enemy.moveLeft();
    }, 100);
    
    const interval = setInterval(() => {
      this.check();
      if (this.die) clearInterval(interval);
      this.regenerateTrack();
      this.view.render(this.track, this.player);
      this.view.displayCount(this.count);
    }, 200);
    this.keyboard.runInteractiveConsole();
  }
}

module.exports = Game;
