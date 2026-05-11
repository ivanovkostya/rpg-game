import Player from './Player';
import Staff from './Staff';
import Knife from './Knife';
import Arm from './Arm';

export default class Mage extends Player {
  constructor(position, name) {
    super(position, name);
    this.life = 70;
    this.magic = 100;
    this.attack = 5;
    this.agility = 8;
    this.description = 'Маг';
    this.weapon = new Staff();
    this.weaponSequence = [this.weapon, new Knife(), new Arm()];
  }

  takeDamage(damage) {
    if (this.magic > 50) {
      const reducedDamage = damage / 2;
      this.magic = Math.max(0, this.magic - 12);
      super.takeDamage(reducedDamage);
      return;
    }
    super.takeDamage(damage);
  }
}