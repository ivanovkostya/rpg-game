import Arm from './Arm';

export default class Player {
  constructor(position, name) {
    this.life = 100;
    this.magic = 20;
    this.speed = 1;
    this.attack = 10;
    this.agility = 5;
    this.luck = 10;
    this.description = 'Игрок';
    this.weapon = new Arm();
    this.position = position;
    this.name = name;
    this.weaponSequence = [this.weapon];
  }

  getLuck() {
    const randomNumber = Math.random() * 100;
    return (randomNumber + this.luck) / 100;
  }

  getDamage(distance) {
    if (distance > this.weapon.range) return 0;
    const weaponDamage = this.weapon.getDamage();
    return (this.attack + weaponDamage) * this.getLuck() / distance;
  }

  takeDamage(damage) {
    this.life = Math.max(0, this.life - damage);
  }

  isDead() {
    return this.life === 0;
  }

  moveLeft(distance) {
    const moveDistance = Math.min(distance, this.speed);
    this.position -= moveDistance;
  }

  moveRight(distance) {
    const moveDistance = Math.min(distance, this.speed);
    this.position += moveDistance;
  }

  move(distance) {
    if (distance < 0) {
      this.moveLeft(Math.abs(distance));
    } else {
      this.moveRight(distance);
    }
  }

  isAttackBlocked() {
    return this.getLuck() > (100 - this.luck) / 100;
  }

  dodged() {
    return this.getLuck() > (100 - this.agility - this.speed * 3) / 100;
  }

  takeAttack(damage) {
    if (this.isAttackBlocked()) {
      this.weapon.takeDamage(damage);
      return;
    }
    if (this.dodged()) {
      return;
    }
    this.takeDamage(damage);
  }

  checkWeapon() {
    if (this.weapon.isBroken() && this.weaponSequence.length > 1) {
      const currentIndex = this.weaponSequence.indexOf(this.weapon);
      if (currentIndex < this.weaponSequence.length - 1) {
        this.weapon = this.weaponSequence[currentIndex + 1];
      }
    }
  }

  tryAttack(enemy) {
    const distance = Math.abs(this.position - enemy.position);
    if (distance > this.weapon.range) return;
    
    this.weapon.takeDamage(10 * this.getLuck());
    let damage = this.getDamage(distance);
    
    if (this.position === enemy.position) {
      damage *= 2;
      enemy.position += 1;
    }
    
    enemy.takeAttack(damage);
    this.checkWeapon();
  }

  chooseEnemy(players) {
    const aliveEnemies = players.filter(p => !p.isDead() && p !== this);
    if (aliveEnemies.length === 0) return null;
    return aliveEnemies.reduce((min, player) => 
      player.life < min.life ? player : min
    );
  }

  moveToEnemy(enemy) {
    const distance = enemy.position - this.position;
    this.move(distance);
  }

  turn(players) {
    const enemy = this.chooseEnemy(players);
    if (!enemy) return;
    this.moveToEnemy(enemy);
    this.tryAttack(enemy);
  }
}