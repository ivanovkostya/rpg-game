import LongBow from '../src/js/LongBow';

describe('LongBow', () => {
  test('should have correct properties (inherited from Bow)', () => {
    const longBow = new LongBow();
    expect(longBow.name).toBe('Длинный лук');
    expect(longBow.attack).toBe(15);
    expect(longBow.durability).toBe(200);
    expect(longBow.initDurability).toBe(200);
    expect(longBow.range).toBe(4);
  });

  test('should return half damage when durability below 30%', () => {
    const longBow = new LongBow();
    longBow.takeDamage(150); // durability: 50 (25% of 200)
    expect(longBow.getDamage()).toBe(7.5);
  });
});