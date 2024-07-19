import { Musica } from "./musica";
import { Celula } from "./celula";

export class ListaDuplamenteLigada {
    private _primeira: Celula | null
    private _ultima: Celula | null
    private _totalDeElementos: number

    public constructor() {
        this._primeira = null
        this._ultima = null
        this._totalDeElementos = 0
    }

    public adicionaNoComeco(elemento: string|Musica): void {
        let nova: Celula = new Celula(null, null, elemento)
        if (this._totalDeElementos > 0 && this._primeira instanceof Celula) {
            this._primeira.setAnterior(nova)
            nova.setProxima(this._primeira)
        } else {
            this._ultima = nova
        }
        this._primeira = nova
        this._totalDeElementos++
    }

    public adicionar(elemento: string|Musica): void {
        if (this._totalDeElementos == 0) {
            this.adicionaNoComeco(elemento)
        } else {
            let nova: Celula = new Celula(null, null, elemento)
            if (this._ultima instanceof Celula) {
                this._ultima.setProxima(nova)
            }
            nova.setAnterior(this._ultima)
            this._ultima = nova
            this._totalDeElementos++
        }
    }

    public toString(): string {
        // Verificando se a Lista está vazia
        if (this._totalDeElementos == 0) {
            return "[]"
        }
        let str = "["
        if (!(this._primeira instanceof Celula)) {
            return str + "]"
        }
        let atual: Celula = this._primeira
        // Percorrendo até o penúltimo elemento.
        for (let i: number = 0; i < this._totalDeElementos - 1; i++) {
            if (atual.getElemento() instanceof Musica) {
                str += atual.getElemento().toString()
            } else {
                str += atual.getElemento()
            }
            str += ", "
            let proxima = atual.getProxima()
            if (proxima instanceof Celula) {
                atual = proxima
            }
        }
        // último elemento
        if (atual.getElemento() instanceof Musica) {
            str += atual.getElemento().toString()
        } else {
            str += atual.getElemento()
        }
        str += "]"
        return str
    }

    private posicaoOcupada(posicao: number): boolean {
        return posicao >= 0 && posicao < this._totalDeElementos
    }

    private pegaCelula(posicao: number): Celula {
        if (!(this._primeira instanceof Celula)) {
            throw new Error("Primeira célula nula")
        }
        if (!this.posicaoOcupada(posicao) || !(this._primeira instanceof Celula)) {
            throw new Error("Posição não existe")
        }
        let atual: Celula = this._primeira
        for (let i: number = 0; i < posicao; i++) {
            let proxima = atual.getProxima()
            if (proxima instanceof Celula) {
                atual = proxima
            }
        }
        return atual
    }

    public adiciona(posicao: number, elemento: string|Musica): void {
        if (posicao == 0) { // No começo.
            this.adicionaNoComeco(elemento)
        } else if (posicao == this._totalDeElementos) { // No fim.
            this.adicionar(elemento)
        } else {
            let anterior: Celula = this.pegaCelula(posicao - 1)
            let proxima: Celula = this.pegaCelula(posicao)
            let nova: Celula = new Celula(proxima, anterior, elemento)
            anterior.setProxima(nova)
            proxima.setAnterior(nova)
            this._totalDeElementos++
        }
    }

    public pega(posicao: number): string|Musica {
        return this.pegaCelula(posicao).getElemento()
    }

    public removeDoComeco(): void {
        if (!(this._primeira instanceof Celula)) {
            throw new Error("Primeira célula nula")
        }
        if (!this.posicaoOcupada(0)) {
            throw new Error("Posição não existe")
        }
        let proxima = this._primeira.getProxima()
        if (proxima instanceof Celula) {
            this._primeira = proxima
        }
        this._primeira.setAnterior(null)
        this._totalDeElementos--
        if (this._totalDeElementos == 0) {
            this._ultima = null
        }
    }

    public removeDoFim(): void {
        if (!(this._ultima instanceof Celula)) {
            throw new Error("Última célula nula")
        }
        if (!this.posicaoOcupada(this._totalDeElementos - 1)) {
            throw new Error("Posição não existe")
        }
        if (this._totalDeElementos == 1) {
            this.removeDoComeco()
        } else {
            let penultima = this._ultima.getAnterior()
            if (penultima instanceof Celula) {
                penultima.setProxima(null)
            }
            this._ultima = penultima
            this._totalDeElementos--
        }
    }

    public remove(posicao: number): void {
        if (!this.posicaoOcupada(posicao)) {
            throw new Error("Posição não existe")
        } else if (posicao == this._totalDeElementos - 1) {
            this.removeDoFim()
        } else {
            let anterior: Celula = this.pegaCelula(posicao - 1)
            let atual = anterior.getProxima()
            if (!(atual instanceof Celula)) {
                throw new Error("Célula atual nula")
            }
            let proxima = atual.getProxima()
            if (!(proxima instanceof Celula)) {
                throw new Error("Próxima célula nula")
            }
            anterior.setProxima(proxima)
            proxima.setAnterior(anterior)
            this._totalDeElementos--
        }
    }

    public contem(elemento: string): Celula | boolean {
        let atual = this._primeira
        while (atual != null) {
            if (atual.getElemento() === elemento) {
                return atual
            }
            atual = atual.getProxima()
        }
        return false
    }

    public tamanho(): number {
        return this._totalDeElementos
    }
}
