import { Pilha } from "./Pilha";

//Criar um pilha com capacidade para 5 elementos;
var pilha = new Pilha();

pilha.empilhar('A');
pilha.empilhar('B');
pilha.empilhar('C');
pilha.empilhar('D');
pilha.empilhar('E');

//Verificar e imprimir se a pilha está vazia;
if (pilha.estavazia()) {
    console.log("Está vazia.")
}

//Adicionar 3 elementos na pilha;
pilha.empilhar('F');
pilha.empilhar('G');
pilha.empilhar('H');

//Imprimir o tamanho da pilha;
console.log(pilha.getTamanho());

//Imprimir todos os elementos da pilha;
console.log(pilha.toString());

//Imprimir o elemento do topo da pilha;
console.log(pilha.topo());

//Adicionar mais 3 elementos na pilha;
pilha.empilhar('I');
pilha.empilhar('J');
pilha.empilhar('K');

//Verificar e imprimir se a pilha está vazia;
if (pilha.estavazia()) {
    console.log("Está vazia.")
}

//Imprimir o elemento do topo da pilha;
console.log(pilha.topo());

//Desempilhar 1 elemento da pilha;
pilha.desempilhar();

//Imprimir o elemento do topo da pilha;
console.log(pilha.topo());

//Desempilhar 1 elemento da pilha;
pilha.desempilhar();

//Imprimir todos os elementos da pilha novamente;
console.log(pilha.toString());

//Imprimir o tamanho da pilha novamente;
console.log(pilha.getTamanho());