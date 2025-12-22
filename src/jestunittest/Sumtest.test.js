const s=require('./Sumtest');

test('adds 2 numbers', () => {
    expect(s(1, 2)).toBe(3);
});