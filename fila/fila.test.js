const { Fila } = require("./fila");

test('adicionar um elemento na fila vazia', () => {
    let fila = new Fila();
    fila.enfileirar('A');
    expect(fila.enfileirar()).toBe('[A]');
});
test('adicionar um elemento numa fila com elementos', () => {
    let fila = new Fila();
    fila.enfileirar('A');
    fila.enfileirar('B');
    fila.enfileirar('C')
    expect(fila.toString()).toBe('[A,B,C]');
});
test('testar desinfileirar', () => {
    let fila = new Fila();
    fila.enfileirar('A');
    fila.enfileirar('B');
    fila.enfileirar('C');
    expect(fila.desenfileirar()).toBe('A');
});
test('testar desinfileirarr sem elementos', () => {
    let fila = new Fila();
    expect(fila.desenfileirar()).toBe('');
});
test('testar fila sem elementos', () => {
    let fila = new Fila();
    expect(() => {fila.estaVazia}).toThrow("A fila está vazia");
});
test('testar fila com elementos', () => {
    let fila = new Fila();
    fila.enfileirar('C');
    expect(() => {fila.estaVazia}).toBe("[C]");
});
test('testar estaVazia com elementos', () => {
    let fila = new Fila();
    fila.enfileirar('A');
    fila.enfileirar('B');
    fila.enfileirar('C');
    expect(fila.estavazia()).toBeFalsy()
});
test('testar estaVazia sem elementos', () => {
    let fila = new Fila();
    expect(fila.estavazia()).toBeTruthy()
});
test('testar proximo elemento numa fila com elementos', () => {
    let fila = new Fila();
    fila.enfileirar('A');
    fila.enfileirar('B');
    fila.enfileirar('C');
    expect(fila.proximoElemento).toBe('A')
});
test('testar proximo elemento numa fila sem elementos', () => {
    let fila = new Fila();
    expect(fila.proximoElemento).toBe('')
});