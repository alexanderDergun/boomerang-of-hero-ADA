// Сделаем отдельный класс для отображения игры в консоли.
const Game = require('./Game');

class View {
  render(arr) {
    const yourTeamName = 'Elbrus';

    // Тут всё рисуем.
    console.clear();
    console.log(arr.join(''));
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
  }
}
module.exports = View;
