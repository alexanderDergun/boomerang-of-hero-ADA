// Сделаем отдельный класс для отображения игры в консоли.
const Game = require('./Game')

class View {
  constructor () {
  }
  render() {
    const yourTeamName = 'Elbrus';

    // Тут всё рисуем.
    // console.clear();
    console.log(this.game.track.join(' '));
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
  }

}
module.exports = View;
