import Warrior from './Warrior';
import Axe from './Axe';
import Knife from './Knife';
import Arm from './Arm';

export default class Dwarf extends Warrior {
  constructor(position, name) {
    super(position, name);
    this.life = 130;
    this.attack = 15;
    this.luck = 20;
    this.description = 'Гном';
    this.weapon = new Axe();
    this.weaponSequence = [this.weapon, new Knife(), new Arm()];
    this.attackCounter = 0;
  }

  takeDamage(damage) {
    this.attackCounter++;
    if (this.attackCounter % 6 === 0 && this.getLuck() > 0.5) {
      damage /= 2;
    }
    super.takeDamage(damage);
  }
}