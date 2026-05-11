import Staff from '../src/js/Staff';

describe('Staff', () => {
  test('should have correct properties', () => {
    const staff = new Staff();
    expect(staff.name).toBe('Посох');
    expect(staff.attack).toBe(8);
    expect(staff.durability).toBe(300);
    expect(staff.initDurability).toBe(300);
    expect(staff.range).toBe(2);
  });
});