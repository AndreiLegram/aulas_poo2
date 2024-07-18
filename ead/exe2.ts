class Trajeto {
    public local: string;
    public origem: string;
    public destino: string;
    public distancia: number;
    public tempo: number;

    constructor(local: string, origem: string, destino: string, distancia: number, tempo: number) {
        this.local = local;
        this.origem = origem;
        this.destino = destino;
        this.distancia = distancia;
        this.tempo = tempo;
    }

    public toString(): string {
        return `Local: ${this.local}, Origem: ${this.origem}, Destino: ${this.destino}, Distância: ${this.distancia}km, Tempo: ${this.tempo}min`;
    }
}

class Celula {
    private _proxima: Celula | null;
    private _anterior: Celula | null;
    private _elemento: Trajeto;

    constructor(proxima: Celula | null, anterior: Celula | null, elemento: Trajeto) {
        this._proxima = proxima;
        this._anterior = anterior;
        this._elemento = elemento;
    }

    public getProxima(): Celula | null {
        return this._proxima;
    }

    public setProxima(celula: Celula | null): void {
        this._proxima = celula;
    }

    public getAnterior(): Celula | null {
        return this._anterior;
    }

    public setAnterior(celula: Celula | null): void {
        this._anterior = celula;
    }

    public getElemento(): Trajeto {
        return this._elemento;
    }
}

class ListaDuplamenteLigada {
    private _primeira: Celula | null;
    private _ultima: Celula | null;
    private _totalDeElementos: number;

    constructor() {
        this._primeira = null;
        this._ultima = null;
        this._totalDeElementos = 0;
    }

    public adicionaNoComeco(elemento: Trajeto): void {
        let nova: Celula = new Celula(null, null, elemento);
        if (this._totalDeElementos > 0 && this._primeira instanceof Celula) {
            this._primeira.setAnterior(nova);
            nova.setProxima(this._primeira);
        } else {
            this._ultima = nova;
        }
        this._primeira = nova;
        this._totalDeElementos++;
    }

    public adicionar(elemento: Trajeto): void {
        if (this._totalDeElementos == 0) {
            this.adicionaNoComeco(elemento);
        } else {
            let nova: Celula = new Celula(null, null, elemento);
            if (this._ultima instanceof Celula) {
                this._ultima.setProxima(nova);
            }
            nova.setAnterior(this._ultima)
            this._ultima = nova;
            this._totalDeElementos++;
        }
    }

    public toString(): string {
        if (this._totalDeElementos == 0) {
            return "[]";
        }
        let str = "[";
        if (!(this._primeira instanceof Celula)) {
            return str + "]";
        }
        let atual: Celula = this._primeira;
        for (let i: number = 0; i < this._totalDeElementos - 1; i++) {
            str += atual.getElemento().toString();
            str += ", ";
            let proxima = atual.getProxima();
            if (proxima instanceof Celula) {
                atual = proxima;
            }
        }
        str += atual.getElemento().toString();
        str += "]";
        return str;
    }

    public pegaCelula(posicao: number): Celula {
        if (!this.posicaoOcupada(posicao) || !(this._primeira instanceof Celula)) {
            throw new Error("Posição não existe");
        }
        let atual: Celula = this._primeira;
        for (let i: number = 0; i < posicao; i++) {
            let proxima = atual.getProxima();
            if (proxima instanceof Celula) {
                atual = proxima;
            }
        }
        return atual;
    }

    private posicaoOcupada(posicao: number): boolean {
        return posicao >= 0 && posicao < this._totalDeElementos;
    }

    public tamanho(): number {
        return this._totalDeElementos;
    }
}

// Classe de Teste
class TesteItinerario {
    public static main(): void {
        let lista = new ListaDuplamenteLigada();

        lista.adicionar(new Trajeto("Local1", "Origem1", "Destino1", 10, 20));
        lista.adicionar(new Trajeto("Local2", "Origem2", "Destino2", 15, 30));
        lista.adicionar(new Trajeto("Local3", "Origem3", "Destino3", 20, 40));
        lista.adicionar(new Trajeto("Local4", "Origem4", "Destino4", 25, 50));
        lista.adicionar(new Trajeto("Local5", "Origem5", "Destino5", 30, 60));

        console.log(lista.toString());

        let distanciaTotal = 0;
        let tempoTotal = 0;

        for (let i = 0; i < lista.tamanho(); i++) {
            let trajeto = lista.pegaCelula(i).getElemento();
            distanciaTotal += trajeto.distancia;
            tempoTotal += trajeto.tempo;
        }

        console.log(`Distância total percorrida: ${distanciaTotal}km`);
        console.log(`Tempo total gasto: ${tempoTotal}min`);
    }
}

// Executar testes
TesteItinerario.main();
