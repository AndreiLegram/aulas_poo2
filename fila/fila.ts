export class Fila {
    private elementos;
    private tamanho;

    constructor() {
        this.elementos = [];
        this.tamanho = 0;
    }

    public enfileirar(elemento: string): void { 
        this.elementos[this.tamanho] = elemento;
        this.tamanho++;
    }

    public estaVazia():boolean {
       return this.tamanho === 0;
    }
    public proximoElemento(): string {
        return this.elementos[this.tamanho];
    }
    public desenfileirar(): string {
        let elem = this.elementos[this.tamanho - 1];
        this.tamanho--;
        return elem;
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