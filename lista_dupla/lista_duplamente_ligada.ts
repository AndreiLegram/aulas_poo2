import { Carro } from "./carro";
import { Celula } from "./celula";

export class ListaDuplamenteLigada {
    private _primeira: Celula;
    private _ultima: Celula;
    private _totalDeElementos: number;

    public constructor() {
        this._primeira = null;
        this._ultima = null;
        this._totalDeElementos = 0;
    }

    public adicionaNoComeco(elemento: Carro): void {
        let nova: Celula = new Celula(null, null, elemento);
        if (this._totalDeElementos != 0) {
            this._primeira.setAnterior(nova);
            nova.setProxima(this._primeira);
        } else {
            this._ultima = nova;
        }
        this._primeira = nova;
        this._totalDeElementos++;
    }

    public adicionar(elemento: Carro): void {
        if (this._totalDeElementos == 0) {
            this.adicionaNoComeco(elemento);
        } else {
            let nova: Celula = new Celula(null, null, elemento);
            this._ultima.setProxima(nova);
            nova.setAnterior(this._ultima)
            this._ultima = nova;
            this._totalDeElementos++;
        }
    }

    public toString(): string {
        // Verificando se a Lista está vazia
        if (this._totalDeElementos == 0) {
            return "[]";
        }
        let str = "[";
        let atual: Celula = this._primeira;
        // Percorrendo até o penúltimo elemento.
        for (let i: number = 0; i < this._totalDeElementos - 1; i++) {
            str += atual.getElemento().getNome();
            str += ", ";
            atual = atual.getProxima();
        }
        // último elemento
        str += atual.getElemento().getNome();
        str += "]";
        return str;
    }

    private posicaoOcupada(posicao: number): boolean {
        return posicao >= 0 && posicao < this._totalDeElementos;
    }

    private pegaCelula(posicao: number): Celula {
        if (!this.posicaoOcupada(posicao)) {
            throw new Error("Posição não existe");
        }
        let atual: Celula = this._primeira;
        for (let i: number = 0; i < posicao; i++) {
            atual = atual.getProxima();
        }
        return atual;
    }

    public adiciona(posicao: number, elemento: Carro): void {
        if (posicao == 0) { // No começo.
            this.adicionaNoComeco(elemento);
        } else if (posicao == this._totalDeElementos) { // No fim.
            this.adicionar(elemento);
        } else {
            let anterior: Celula = this.pegaCelula(posicao - 1);
            let proxima: Celula = this.pegaCelula(posicao)
            let nova: Celula = new Celula(proxima, anterior, elemento);
            anterior.setProxima(nova);
            proxima.setAnterior(nova);
            this._totalDeElementos++;
        }
    }

    public pega(posicao: number): Carro {
        return this.pegaCelula(posicao).getElemento();
    }

    public removeDoComeco(): void {
        if (!this.posicaoOcupada(0)) {
            throw new Error("Posição não existe");
        }
        this._primeira = this._primeira.getProxima();
        this._primeira.setAnterior(null)
        this._totalDeElementos--;
        if (this._totalDeElementos == 0) {
            this._ultima = null;
        }
    }

    public removeDoFim(): void {
        if (!this.posicaoOcupada(this._totalDeElementos - 1)) {
            throw new Error("Posição não existe");
        }
        if (this._totalDeElementos == 1) {
            this.removeDoComeco();
        } else {
            let penultima: Celula = this._ultima.getAnterior();
            penultima.setProxima(null);
            this._ultima = penultima;
            this._totalDeElementos--;
        }
    }

    public remove(posicao: number): void {
        if (!this.posicaoOcupada(posicao)) {
            throw new Error("Posição não existe");
        } else if (posicao == this._totalDeElementos - 1) {
            this.removeDoFim();
        } else {
            let anterior: Celula = this.pegaCelula(posicao - 1);
            let atual: Celula = anterior.getProxima();
            let proxima: Celula = atual.getProxima();
            anterior.setProxima(proxima);
            proxima.setAnterior(anterior);
            this._totalDeElementos--;
        }
    }

    public contem(elemento: Carro): boolean {
        let atual: Celula = this._primeira;
        while (atual != null) {
            if (atual.getElemento() === elemento) {
                return true;
            }
            atual = atual.getProxima();
        }
        return false;
    }

    public tamanho(): number {
        return this._totalDeElementos;
    }
}
