import Bow from '../src/js/Bow';

describe('Bow', () => {
  test('should have correct properties', () => {
    const bow = new Bow();
    expect(bow.name).toBe('Лук');
    expect(bow.attack).toBe(10);
    expect(bow.durability).toBe(200);
    expect(bow.initDurability).toBe(200);
    expect(bow.range).toBe(3);
  });

  test('should return half damage when durability below 30%', () => {
    const bow = new Bow();
    bow.takeDamage(150); // durability: 50 (25% of 200)
    expect(bow.getDamage()).toBe(5);
  });

  test('should return 0 when broken', () => {
    const bow = new Bow();
    bow.takeDamage(200);
    expect(bow.getDamage()).toBe(0);
    expect(bow.isBroken()).toBe(true);
  });
});