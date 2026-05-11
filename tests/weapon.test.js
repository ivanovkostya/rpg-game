import Weapon from '../src/js/Weapon';

describe('Weapon', () => {
  describe('constructor', () => {
    test('should create weapon with correct properties', () => {
      const weapon = new Weapon('Тестовое оружие', 15, 100, 2);
      expect(weapon.name).toBe('Тестовое оружие');
      expect(weapon.attack).toBe(15);
      expect(weapon.durability).toBe(100);
      expect(weapon.initDurability).toBe(100);
      expect(weapon.range).toBe(2);
    });
  });

  describe('takeDamage', () => {
    test('should reduce durability by damage amount', () => {
      const weapon = new Weapon('Тест', 10, 100, 1);
      weapon.takeDamage(30);
      expect(weapon.durability).toBe(70);
    });

    test('should not reduce durability below 0', () => {
      const weapon = new Weapon('Тест', 10, 50, 1);
      weapon.takeDamage(100);
      expect(weapon.durability).toBe(0);
    });

    test('should not change durability if durability is Infinity', () => {
      const weapon = new Weapon('Тест', 1, Infinity, 1);
      weapon.takeDamage(100);
      expect(weapon.durability).toBe(Infinity);
    });
  });

  describe('getDamage', () => {
    test('should return full attack when durability >= 30% of initial', () => {
      const weapon = new Weapon('Тест', 20, 100, 1);
      weapon.takeDamage(20); // durability: 80 (80% >= 30%)
      expect(weapon.getDamage()).toBe(20);
    });

    test('should return half attack when durability < 30% and > 0', () => {
      const weapon = new Weapon('Тест', 20, 100, 1);
      weapon.takeDamage(75); // durability: 25 (25% < 30%)
      expect(weapon.getDamage()).toBe(10);
    });

    test('should return 0 when durability is 0', () => {
      const weapon = new Weapon('Тест', 20, 100, 1);
      weapon.takeDamage(100);
      expect(weapon.getDamage()).toBe(0);
    });
  });

  describe('isBroken', () => {
    test('should return false when durability > 0', () => {
      const weapon = new Weapon('Тест', 10, 50, 1);
      expect(weapon.isBroken()).toBe(false);
    });

    test('should return true when durability is 0', () => {
      const weapon = new Weapon('Тест', 10, 50, 1);
      weapon.takeDamage(50);
      expect(weapon.isBroken()).toBe(true);
    });
  });
});