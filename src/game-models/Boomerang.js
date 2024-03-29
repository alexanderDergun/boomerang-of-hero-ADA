// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor(skin = '🌀', position = 0, boomerangFly = true) {
    this.skin = skin;
    this.position = position;
    this.boomerangFly = boomerangFly;
  }

  fly() {
    if (this.boomerangFly) {
      this.moveRight();
    } else {
      this.moveLeft();
    }
  }

  moveLeft() {
    // Идём влево.
      this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }
}

module.exports = Boomerang;
