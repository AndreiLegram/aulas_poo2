import { Pilha } from './Pilha';

var pilha = new Pilha();

for (let i = 0; i < 10; i++) {
    var numero = Math.floor(Math.random() * 10);
    console.log(numero);
    var numero2 = numero.toString();
    if (numero % 2 == 0) {
        pilha.empilhar(numero2);
    } else {
        if (pilha.estavazia()) {
            console.log("A pilha está vazia.")
        } else {
            pilha.desempilhar();
        }
    }
}

console.log(pilha.toString());