import { Musica } from "./musica";
import { ListaDuplamenteLigada } from "./lista_duplamente_ligada";

class Navegador {
    private _historico: ListaDuplamenteLigada
    private _posicao: number

    public constructor() {
        this._historico = new ListaDuplamenteLigada()
        this._posicao = 0
    }

    public adicionar(endereco: string): void {
        this._historico.adicionar(endereco)
    }

    public voltar(): string|Musica {
        if (this._posicao === 0) {
            throw new Error("Nenhum endereço encontrado.")
        }
        this._posicao--
        return this._historico.pega(this._posicao)
    }

    public avancar(): string|Musica {
        if (this._posicao === this._historico.tamanho() - 1) {
            throw new Error("Nenhum endereço encontrado.")
        }
        this._posicao++
        return this._historico.pega(this._posicao)
    }

    public paginaAtual(): string|Musica {
        this._posicao = this._historico.tamanho() - 1
        return this._historico.pega(this._posicao)
    }

}

class Testes {
    private navegador: Navegador

    public constructor() {
        this.navegador = new Navegador()
        this.navegador.adicionar("aaaa")
        this.navegador.adicionar("bbbb")
        this.navegador.adicionar("cccc")
        this.navegador.adicionar("dddd")
        this.navegador.adicionar("eeee")
        console.log(this.navegador.paginaAtual())
        console.log(this.navegador.voltar())
        console.log(this.navegador.voltar())
        console.log(this.navegador.paginaAtual())
        console.log(this.navegador.voltar())
        console.log(this.navegador.voltar())
        console.log(this.navegador.avancar())
        console.log(this.navegador.avancar())
        console.log(this.navegador.paginaAtual())
    }
}

new Testes()
