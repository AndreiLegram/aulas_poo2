export class Fila {
    private elementos;
    private tamanho: number;

    public constructor() {
        this.elementos = [];
        this.tamanho = 0;
    }

    public enfileirar(elemento: string): void {
        this.elementos[this.tamanho] = elemento;
        this.tamanho++;
    }

    public proximoElemento(): string {
        return this.elementos[0];
    }

    public desenfileirar(): string {
        if (this.estaVazia()) {
            throw new Error("A fila está vazia");
        }
        this.tamanho--;
        return this.elementos.shift();
    }

    public getTamanho(): number {
        return this.tamanho;
    }

    public estaVazia(): boolean {
        return this.tamanho === 0;
    }

    public toString(): string {
        let s: string = "[";
        for (let i = 0; i < this.tamanho - 1; i++) {
            s += this.elementos[i];
            s += ",";
        }
        if (this.tamanho > 0) {
            s += this.elementos[this.tamanho - 1];
        }
        s += "]";
        return s.toString();
    }

}