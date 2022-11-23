const fnCalcular = require('./MetodosCalcular')

test('Teste função de soma', () => {
    expect(fnCalcular.somar(1, 2)).toBe(3);
});


test('Teste função de multiplicar', () => {
    expect(fnCalcular.multiplicar(5, 2)).toBe(10);
});


test('Teste função de subtrair', () => {
    expect(fnCalcular.subtrair(20, 12)).toBe(8);
});


test('Teste função de dividir', () => {
    expect(fnCalcular.dividir(20, 5)).toBe(4);
});

