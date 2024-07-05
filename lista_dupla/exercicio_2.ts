import { ListaDuplamenteLigada } from "./lista_duplamente_ligada";

export class Carro {
    private modelo: string;
    private ano: number;
    private potencia: number;

    public constructor(modelo: string, ano: number, potencia: number) {
        this.modelo = modelo;
        this.ano = ano;
        this.potencia = potencia;
    }

    public toString(): string {
        return `[Carro=${this.modelo}-${this.ano}-${this.potencia}]`;
    }
}

export class TestaListaDuplamenteLigada {
    private lista: ListaDuplamenteLigada;

    public constructor() {
        this.lista = new ListaDuplamenteLigada()

        let carro1: Carro = new Carro('Uno Mille', 2013, 76)
        this.lista.adicionar(new Carro('Ronaldo', 2013, 28))
        this.lista.adicionar(new Carro('Carol', 2013, 4))
        this.lista.adiciona(2, carro1)
        this.lista.adicionaNoComeco(new Carro('Marina', 2013, 10))

        console.log(this.lista.toString());
        console.log(this.lista.tamanho());

        this.lista.remove(2)

        console.log(this.lista.toString());

        this.lista.removeDoComeco();

        console.log(this.lista.pega(1));

        console.log(this.lista.contem(carro1))

        this.lista.removeDoFim();

        console.log(this.lista.toString());
    }
}

new TestaListaDuplamenteLigada()
