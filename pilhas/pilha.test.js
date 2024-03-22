const { Pilha } = require("./pilha");

test('adicionar um elemento na pilha vazia', () => {
    let pilha = new Pilha();
    pilha.empilhar('C')
    expect(pilha.toString()).toBe('[C]');
    expect(pilha.getTamanho()).toBe(1);
});
test('adicionar um elemento na pilha com elementos', () => {
    let pilha = new Pilha();
    pilha.empilhar('A');
    pilha.empilhar('B');
    pilha.empilhar('C')
    expect(pilha.toString()).toBe('[A,B,C]');
    expect(pilha.getTamanho()).toBe(3);
});
test('testar topo da pilha com elementos', () => {
    let pilha = new Pilha();
    pilha.empilhar('A');
    pilha.empilhar('B');
    pilha.empilhar('C');
    expect(pilha.topo()).toBe('C');
});
test('testar topo da pilha com um elemento', () => {
    let pilha = new Pilha();
    pilha.empilhar('C')
    expect(pilha.topo()).toBe('C');
});
test('testar topo da pilha sem elementos', () => {
    let pilha = new Pilha();
    expect(pilha.topo()).toThrow(Error);
});
test('testar desempilhar pilha vazia', () => {
    let pilha = new Pilha();
    expect(pilha.desempilhar()).toThrow(Error)
});
test('testar desempilhar com elementos', () => {
    let pilha = new Pilha();
    pilha.empilhar('A');
    pilha.empilhar('B');
    pilha.empilhar('C');
    expect(pilha.desempilhar()).toBe('C');
});
test('testar getTamanho pilha vazia', () => {
    let pilha = new Pilha();
    expect(pilha.getTamanho()).toBe(0)
});
test('testar getTamanho com elementos', () => {
    let pilha = new Pilha();
    pilha.empilhar('A');
    pilha.empilhar('B');
    pilha.empilhar('C');
    expect(pilha.getTamanho()).toBe(3);
});
test('testar getTamanho pilha vazia', () => {
    let pilha = new Pilha();
    expect(pilha.getTamanho()).toBeTruthy()
});
test('testar estaVazia com elementos', () => {
    let pilha = new Pilha();
    pilha.empilhar('A');
    pilha.empilhar('B');
    pilha.empilhar('C');
    expect(pilha.estavazia()).toBeFalsy()
});
test('testar estaVazia sem elementos', () => {
    let pilha = new Pilha();
    expect(pilha.estavazia()).toBeTruthy()
});

test('testar toString pilha vazia', () => {
    let pilha = new Pilha();
    expect(pilha.toString()).toBe('[]')
});
test('testar toString com elementos', () => {
    let pilha = new Pilha();
    pilha.empilhar('A');
    pilha.empilhar('B');
    pilha.empilhar('C');
    expect(pilha.toString()).toBe('[A,B,C]')
});
