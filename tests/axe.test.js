import Axe from '../src/js/Axe';

describe('Axe', () => {
  test('should have correct properties (inherited from Sword)', () => {
    const axe = new Axe();
    expect(axe.name).toBe('Секира');
    expect(axe.attack).toBe(27);
    expect(axe.durability).toBe(800);
    expect(axe.initDurability).toBe(800);
    expect(axe.range).toBe(1);
  });

  test('should return half damage when durability below 30%', () => {
    const axe = new Axe();
    axe.takeDamage(600); // durability: 200 (25% of 800)
    expect(axe.getDamage()).toBe(13.5);
  });
});