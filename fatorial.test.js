const fatorial = require('./fatorial');

test('fatorial de 5', () => {
    expect(fatorial(5)).toBe(120);
});
