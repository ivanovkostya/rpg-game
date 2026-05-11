import Knife from '../src/js/Knife';

describe('Knife', () => {
  test('should have correct properties', () => {
    const knife = new Knife();
    expect(knife.name).toBe('Нож');
    expect(knife.attack).toBe(5);
    expect(knife.durability).toBe(300);
    expect(knife.initDurability).toBe(300);
    expect(knife.range).toBe(1);
  });

  test('should return half damage when durability below 30%', () => {
    const knife = new Knife();
    knife.takeDamage(250); // durability: 50 (16.6% of 300)
    expect(knife.getDamage()).toBe(2.5);
  });
});