import StormStaff from '../src/js/StormStaff';

describe('StormStaff', () => {
  test('should have correct properties (inherited from Staff)', () => {
    const stormStaff = new StormStaff();
    expect(stormStaff.name).toBe('Посох Бури');
    expect(stormStaff.attack).toBe(10);
    expect(stormStaff.durability).toBe(300);
    expect(stormStaff.initDurability).toBe(300);
    expect(stormStaff.range).toBe(3);
  });
});