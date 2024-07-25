class Pilha {
    private elementos: object
    private tamanho: number
    public constructor() {
        this.elementos = {}
        this.tamanho = 0
    }

    // Insere um elemento no topo da pilha
    public empilhar(elemento: string): void {
        this.elementos[this.tamanho] = elemento
        this.tamanho++
    }

    // Retorna o elemento do topo da pilha
    public topo(): string {
        if (this.estaVazia()) {
            throw new Error("A pilha está vazia")
        }
        return this.elementos[this.tamanho - 1]
    }

    // Retorna e remove o elemento do topo da pilha
    public desempilhar(): string {
        let elem = this.topo()
        this.tamanho--
        return elem
    }

    // Retorna o tamanho da pilha
    public getTamanho(): number {
        return this.tamanho
    }

    // Retorna se a pilha está vazia
    public estaVazia(): boolean {
        return this.tamanho === 0
    }

    // Retorna o vetor 
    public toString(): string {
        let s: string = "["
        for (let i = 0; i < this.tamanho - 1; i++) {
            s += this.elementos[i]
            s += ","
        }
        if (this.tamanho > 0) {
            s += this.elementos[this.tamanho - 1]
        }
        s += "]"
        return s.toString()
    }

}

class ControleAcoes {
    private pilha: Pilha
    private acao_desfeita: null|string

    public constructor() {
        this.pilha = new Pilha()
        this.acao_desfeita = null
    }

    public adicionar(acao: string): void {
        this.pilha.empilhar(acao)
        this.acao_desfeita = null
    }

    public desfazer(): void {
        this.acao_desfeita = this.pilha.desempilhar()
    }

    public refazer(): void {
        if (this.acao_desfeita === null) {
            throw new Error("impossível refazer, pois foi adicionada uma nova ação")
        }
        this.pilha.empilhar(this.acao_desfeita)
    }

    public listar(): string {
        return this.pilha.toString()
    }
}

class TestaControleAcoes {
    public constructor() {
        const ca = new ControleAcoes()
        try {
            ca.adicionar("Acao 1")
            ca.adicionar("Acao 2")
            ca.adicionar("Acao 3")
            ca.adicionar("Acao 4")
            ca.adicionar("Acao 5")
            ca.desfazer() // desfaz a ação 5
            ca.desfazer() // desfaz a ação 4
            ca.refazer() // refaz a ação 4
            ca.adicionar("Acao 6")
            ca.refazer() // throw new Error
        } catch (error) {
            console.log(error.message)
        }
        console.log(ca.listar())
    }
}

new TestaControleAcoes()
