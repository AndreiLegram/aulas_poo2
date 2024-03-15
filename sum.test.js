const  {fatorial, sum} = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
})

test('fatorial de 5', () => {
    expect(fatorial(5)).toBe(120);
})
