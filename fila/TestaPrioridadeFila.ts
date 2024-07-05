import { Fila } from "./fila";

// Criar uma fila;
const fila = new Fila();

// Verificar e imprimir se a fila está vazia;
console.log(fila.estaVazia() ? "Está vazia" : "Não está vazia");

// Adicionar 3 elementos na fila;
fila.enfileirar('A');
fila.enfileirar('B');
fila.enfileirar('C', true);

// Imprimir o tamanho da fila;
console.log(fila.getTamanho());

// Imprimir todos os elementos da fila;
console.log(fila.toString());

// Imprimir o próximo elemento a ser desenfileirado;
console.log(fila.proximoElemento());

// Adicionar mais 3 elementos na fila;
fila.enfileirar('D');
fila.enfileirar('E', true);
fila.enfileirar('F');

// Verificar e imprimir se a fila está vazia;
console.log(fila.estaVazia() ? "Está vazia" : "Não está vazia");

// Desenfileirar 1 elemento da fila;
fila.desenfileirar();

// Imprimir o próximo elemento a ser desenfileirado;
console.log(fila.proximoElemento());

// Desenfileirar 1 elemento da fila;
fila.desenfileirar();

// Imprimir todos os elementos da fila novamente;
console.log(fila.toString());

// Imprimir o tamanho da fila novamente;
console.log(fila.getTamanho());
