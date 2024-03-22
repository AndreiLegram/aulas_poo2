export class Pilha {
    private elementos;
    private tamanho: number;
    public constructor() {
        this.elementos = {};
        this.tamanho = 0;
    }

    // Insere um elemento no topo da pilha
    public empilhar(elemento: string): void {
        this.elementos[this.tamanho] = elemento;
        this.tamanho++;
    }

    // Retorna o elemento do topo da pilha
    public topo(): string {
        if (this.estavazia()) {
            throw new Error("A pilha está vazia");
        }
        return this.elementos[this.tamanho - 1];
    }

    // Retorna e remove o elemento do topo da pilha
    public desempilhar(): string {
        let elem = this.topo();
        this.tamanho--;
        return elem;
    }

    // Retorna o tamanho da pilha
    public getTamanho(): number {
        return this.tamanho;
    }

    // Retorna se a pilha está vazia
    public estavazia(): boolean {
        return this.tamanho === 0;
    }

    // Retorna o vetor 
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
