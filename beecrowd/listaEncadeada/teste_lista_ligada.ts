import { Aluno } from "./aluno";
import { ListaLigada } from "./exe1";

let lista : ListaLigada = new ListaLigada()
let aluno1:Aluno = new Aluno('Betty', 1)
lista.adicionar(new Aluno('Ronaldo', 28))
lista.adicionar(new Aluno('Carol', 4))
lista.adiciona(2, aluno1)
lista.adicionaNoComeco(new Aluno ('Marina', 10))

console.log(lista.toString());
console.log(lista.tamanho());

lista.remove(2)

console.log(lista.toString());

lista.removeDoComeco();

console.log(lista.pega(1));

console.log(lista.contem(aluno1))

lista.removeDoFim();

console.log(lista.toString());
