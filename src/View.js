// Сделаем отдельный класс для отображения игры в консоли.
const Game = require('./Game');

class View {
  displayCount(count) {
    console.log(`Ваш счет : ${count}`)
  }
  displayKill () {
    console.log('Enemy is DEAD !!!')
    setTimeout(console.clear(), 5000)
  }

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
