// Сделаем отдельный класс для отображения игры в консоли.
const Game = require('./Game');

class View {
  displayCount(count) {
    console.log(`Загублено душ : ${count} \n`);
  }

  // timeCount(time) {
  //   time += 0.1;
  //   console.log(time);
  // }

  // displayKill () {
  //   console.log('Enemy is DEAD !!!')
  //   setTimeout(console.clear(), 5000)
  // }
  render(track, name) {
    const yourTeamName = 'Boomerang-Of-Hero-ADA';
    // Тут всё рисуем.
    console.clear();
    console.log(track.join(''));
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love \n`);
    console.log(name)
  }
}
module.exports = View;
