import Sword from '../src/js/Sword';

describe('Sword', () => {
  test('should have correct properties', () => {
    const sword = new Sword();
    expect(sword.name).toBe('Меч');
    expect(sword.attack).toBe(25);
    expect(sword.durability).toBe(500);
    expect(sword.initDurability).toBe(500);
    expect(sword.range).toBe(1);
  });

  test('should return half damage when durability below 30%', () => {
    const sword = new Sword();
    sword.takeDamage(400); // durability: 100 (20% of 500)
    expect(sword.getDamage()).toBe(12.5);
  });
});