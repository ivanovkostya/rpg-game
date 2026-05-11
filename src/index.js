import './css/style.css';
import { play } from './js/game';
import Warrior from './js/Warrior';
import Archer from './js/Archer';
import Mage from './js/Mage';

const players = [
  new Warrior(0, 'Воин'),
  new Archer(2, 'Лучник'),
  new Mage(4, 'Маг')
];

const winner = play(players);
console.log(`Победитель: ${winner.name}`);