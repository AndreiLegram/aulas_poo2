const { fila } = require("./fila");

test('adicionar um elemento na fila vazia', () => {
    let fila = new fila();
    fila.enfileirar('A');
    expect(fila.enfileirar()).toBe('[A]');
});
test('adicionar um elemento numa fila com elementos', () => {
    let fila = new fila();
    fila.enfileirar('A');
    fila.enfileirar('B');
    fila.enfileirar('C')
    expect(fila.toString()).toBe('[A,B,C]');
});
test('testar desinfileirar', () => {
    let fila = new fila();
    fila.enfileirar('A');
    fila.enfileirar('B');
    fila.enfileirar('C');
    expect(fila.desinfileirar()).toBe('A');
});
test('testar desinfileirarr sem elementos', () => {
    let fila = new fila();
    expect(fila.desinfileirar()).toBe('');
});
test('testar fila sem elementos', () => {
    let fila = new fila();
    expect(() => {fila.estaVazia}).toThrow("A pilha está vazia");
});
test('testar fila com elementos', () => {
    let fila = new fila();
    fila.enfileirar('C');
    expect(() => {fila.estaVazia}).toBe("[C]");
});
test('testar estaVazia com elementos', () => {
    let fila = new Pilha();
    fila.empilhar('A');
    fila.empilhar('B');
    fila.empilhar('C');
    expect(fila.estavazia()).toBeFalsy()
});
test('testar estaVazia sem elementos', () => {
    let fila = new Pilha();
    expect(fila.estavazia()).toBeTruthy()
});
test('testar proximo elemento numa fila com elementos', () => {
    let fila = new Pilha();
    fila.empilhar('A');
    fila.empilhar('B');
    fila.empilhar('C');
    expect(pilha.proximoElemento).toBe('A')
});
test('testar proximo elemento numa fila sem elementos', () => {
    let fila = new Pilha();
    expect(fila.proximoElemento).toBe('')
});