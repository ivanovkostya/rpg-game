import Archer from './Archer';
import LongBow from './LongBow';
import Knife from './Knife';
import Arm from './Arm';

export default class Crossbowman extends Archer {
  constructor(position, name) {
    super(position, name);
    this.life = 85;
    this.attack = 8;
    this.agility = 20;
    this.luck = 15;
    this.description = 'Арбалетчик';
    this.weapon = new LongBow();
    this.weaponSequence = [this.weapon, new Knife(), new Arm()];
  }
}