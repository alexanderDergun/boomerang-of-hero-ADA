// Сделаем отдельный класс для отображения игры в консоли.
const Game = require('./Game');

class View {
  displayCount(count) {
    console.log(`Ваш счет : ${count}`);
  }

  timeCount(time) {
    
    timeer += 0.1;
    console.log(time);
  }

  // displayKill () {
  //   console.log('Enemy is DEAD !!!')
  //   setTimeout(console.clear(), 5000)
  // }
  render(arr) {
    const yourTeamName = 'Elbrus';

    // Тут всё рисуем.
    console.clear();
    console.log(arr.join(''));
    console.log('\n\n');

    // console.log(timeCount(timer) );
    console.log(`Created by "${yourTeamName}" with love`);
  }
}
module.exports = View;
