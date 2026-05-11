import Arm from '../src/js/Arm';

describe('Arm', () => {
  test('should have correct properties', () => {
    const arm = new Arm();
    expect(arm.name).toBe('Рука');
    expect(arm.attack).toBe(1);
    expect(arm.durability).toBe(Infinity);
    expect(arm.initDurability).toBe(Infinity);
    expect(arm.range).toBe(1);
  });

  test('should not lose durability when taking damage', () => {
    const arm = new Arm();
    arm.takeDamage(100);
    expect(arm.durability).toBe(Infinity);
    expect(arm.isBroken()).toBe(false);
  });

  test('should always return full attack', () => {
    const arm = new Arm();
    arm.takeDamage(50);
    expect(arm.getDamage()).toBe(1);
  });
});