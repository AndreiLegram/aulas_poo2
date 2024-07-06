import { Carro } from "./carro";
import { Celula } from "./celula";
import { ListaDuplamenteLigada } from "./lista_duplamente_ligada";

export class TestaListaDuplamenteLigada {
    private lista: ListaDuplamenteLigada;

    public constructor() {
        this.lista = new ListaDuplamenteLigada()
        this.lista.adicionar(new Carro('Uno Mille', 2013, 76))
        this.lista.adiciona(this.lista.tamanho(), new Carro('Corsa', 2009, 85))

        let ka = new Carro('KA', 2020, 130)
        this.lista.adiciona(2, ka)
        this.lista.adicionaNoComeco(new Carro('Gol', 2010, 106))
        
        console.log(this.lista.toString());
        console.log(this.lista.tamanho());

        this.lista.remove(3)

        console.log(this.lista.toString());

        this.lista.removeDoComeco();

        console.log(this.lista.pega(0));

        this.lista.removeDoFim();

        let celula = this.lista.contem(ka)
        if (celula instanceof Celula) {
            console.log(celula.getElemento());
            console.log(celula.getProxima());
            console.log(celula.getAnterior());
        }

        console.log(this.lista.toString());
    }
}

new TestaListaDuplamenteLigada()
