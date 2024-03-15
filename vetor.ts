export class Vetor {
    private elementos;
    private tamanho;

    public constructor() {
        this.elementos = [];
        this.tamanho = 0;
    }

    public adicionar(elemento: string): void {
        this.elementos[this.tamanho] = elemento;
        this.tamanho++;
    }

    public getTamanho(): number {
        return this.tamanho;
    }

    public vazio(): boolean {
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

    public buscar(posicao: number): string {
        if (!(posicao >= 0 && posicao < this.tamanho)) {
            throw new Error("Posicao invalida");
        }
        return this.elementos[posicao];
    }

    public busca(elemento: string): number {
        for (let i = 0; i < this.tamanho; i++) {
            if (this.elementos[i] === elemento) {
                return i;
            }
        }
        return -1;
    }

    public adicionarPos(posicao: number, elemento: string): boolean {
        if (!(posicao >= 0 && posicao < this.tamanho)) {
            throw new Error("Posicao invalida");
        }
        for (let i = this.tamanho - 1; i >= posicao; i--) {
            this.elementos[i + 1] = this.elementos[i];
        }
        this.elementos[posicao] = elemento;
        this.tamanho++;
        return true;
    }

    public remove(posicao: number): void {
        if (!(posicao >= 0 && posicao < this.tamanho)) {
            throw new Error("Posicao invalida");
        }
        for (let i = posicao; i < this.tamanho - 1; i++) {
            this.elementos[i] = this.elementos[i + 1];
        }
        this.tamanho--;
    }

    public showElements() {
        for (let i = 0 ; i < this.elementos.length; i++) {
            console.log(this.elementos[i]);
        }
    }

    public showPositionElement(posicao) {
        console.log(this.elementos[posicao]);
    }
}