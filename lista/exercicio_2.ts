import { Aluno } from "./aluno";
import { ListaLigada } from "./lista_ligada";

export class TestaListaLigada {
    private lista: ListaLigada;

    public constructor() {
        this.lista = new ListaLigada()

        this.lista.adicionar(new Aluno('Ronaldo', 28))
        this.lista.adicionar(new Aluno('Carol', 40))
        this.lista.adiciona(2, new Aluno('Betty', 30))
        this.lista.adicionaNoComeco(new Aluno ('Marina', 10))

        console.log(this.lista.toString());
        console.log(this.lista.tamanho());

        this.lista.remove(2)

        console.log(this.lista.toString());

        this.lista.removeDoComeco();

        console.log(this.lista.pega(1));

        this.lista.removeDoFim();

        this.lista.contem(new Aluno('Betty', 1))

        console.log(this.lista.toString());
    }
}

new TestaListaLigada()
