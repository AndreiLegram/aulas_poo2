import { Aluno } from "./aluno";
import { ListaLigada } from "./lista_ligada";

export class TestaListaLigada {
    private lista: ListaLigada;

    public constructor() {
        this.lista = new ListaLigada()

        let aluno1:Aluno = new Aluno('Betty', 1)
        this.lista.adicionar(new Aluno('Ronaldo', 28))
        this.lista.adicionar(new Aluno('Carol', 4))
        this.lista.adiciona(2, aluno1)
        this.lista.adicionaNoComeco(new Aluno ('Marina', 10))

        console.log(this.lista.toString());
        console.log(this.lista.tamanho());

        this.lista.remove(2)

        console.log(this.lista.toString());

        this.lista.removeDoComeco();

        console.log(this.lista.pega(1));

        console.log(this.lista.contem(aluno1))

        this.lista.removeDoFim();

        console.log(this.lista.toString());
    }
}

new TestaListaLigada()
