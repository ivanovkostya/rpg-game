import Player from './Player';
import Sword from './Sword';
import Knife from './Knife';
import Arm from './Arm';

export default class Warrior extends Player {
  constructor(position, name) {
    super(position, name);
    this.life = 120;
    this.speed = 2;
    this.description = 'Воин';
    this.weapon = new Sword();
    this.weaponSequence = [this.weapon, new Knife(), new Arm()];
  }

  takeDamage(damage) {
    if (this.life < 60 && this.getLuck() > 0.8 && this.magic > 0) {
      const magicDamage = Math.min(damage, this.magic);
      this.magic -= magicDamage;
      const remainingDamage = damage - magicDamage;
      if (remainingDamage > 0) {
        super.takeDamage(remainingDamage);
      }
      return;
    }
    super.takeDamage(damage);
  }
}