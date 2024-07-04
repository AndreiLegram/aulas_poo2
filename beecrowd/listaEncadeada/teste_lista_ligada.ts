import { Aluno } from "./aluno";
import { ListaLigada } from "./exe1";

let lista : ListaLigada = new ListaLigada()

lista.adicionar(new Aluno('Ronaldo', 28))
lista.adicionar(new Aluno('Carol', 40))
lista.adiciona(2, new Aluno('Betty', 30))
lista.adicionaNoComeco(new Aluno ('Marina', 10))

console.log(lista.toString());
console.log(lista.tamanho());

lista.remove(2)

console.log(lista.toString());

lista.removeDoComeco();

console.log(lista.pega(1));

lista.removeDoFim();

lista.contem(new Aluno('Betty', 1))

console.log(lista.toString());
