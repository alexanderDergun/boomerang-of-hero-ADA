// Сделаем отдельный класс для отображения игры в консоли.
const Game = require('./Game');

class View {
<<<<<<< HEAD
  // constructor ()
=======
  constructor() {
    // const game = new Game()
    // this.game = new Game();
  }

>>>>>>> origin/dev
  render(arr) {
    const yourTeamName = 'Elbrus';

    // Тут всё рисуем.
    console.clear();
<<<<<<< HEAD
    console.log(arr.join(''));
=======
    console.log(arr.join('  '));
>>>>>>> origin/dev
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
  }
}
module.exports = View;
