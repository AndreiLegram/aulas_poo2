import { Musica } from "./musica";
import { ListaDuplamenteLigada } from "./lista_duplamente_ligada";

class Playlist {
    private _playlist: ListaDuplamenteLigada
    private _posicao: number

    public constructor() {
        this._playlist = new ListaDuplamenteLigada()
        this._posicao = 0
    }

    public adicionar(posicao: number, musica: Musica): void {
        this._playlist.adiciona(posicao, musica)
    }

    public remover(posicao: number): void {
        this._playlist.remove(posicao)
    }

    public tocar(): string {
        let elem = this._playlist.pega(this._posicao)
        if (elem instanceof Musica) {
            return elem.getNome()
        }
        throw new Error("Música inválida.")
    }

    public proxima(): string {
        if (this._posicao === this._playlist.tamanho() - 1) {
            throw new Error("Nenhuma música encontrada.")
        }
        this._posicao++
        let elem = this._playlist.pega(this._posicao)
        if (elem instanceof Musica) {
            return elem.getNome()
        }
        throw new Error("Música inválida.")
    }

    public anterior(): string {
        if (this._posicao === 0) {
            throw new Error("Nenhuma música encontrada.")
        }
        this._posicao--
        let elem = this._playlist.pega(this._posicao)
        if (elem instanceof Musica) {
            return elem.getNome()
        }
        throw new Error("Música inválida.")
    }

    public listarMusicas(): string {
        return this._playlist.toString()
    }

    public tempoTotal(): number {
        let tempo = 0
        for (let i = 0; i < this._playlist.tamanho(); i++) {
            let elem = this._playlist.pega(i)
            if (elem instanceof Musica) {
                tempo += elem.getTempo()
            }
        }
        return tempo
    }

}

class Testes {
    private playlist: Playlist

    public constructor() {
        this.playlist = new Playlist()
        this.playlist.adicionar(0, new Musica("aaaa", 12))
        this.playlist.adicionar(1, new Musica("bbbb", 4))
        this.playlist.adicionar(2, new Musica("cccc", 8))
        this.playlist.adicionar(3, new Musica("dddd", 9))
        this.playlist.adicionar(4, new Musica("eeee", 2))
        console.log(this.playlist.listarMusicas())
        console.log(this.playlist.tempoTotal())
        console.log(this.playlist.tocar())
        this.playlist.remover(4)
        this.playlist.remover(1)
        console.log(this.playlist.tocar())
        console.log(this.playlist.listarMusicas())
        console.log(this.playlist.tempoTotal())
        console.log(this.playlist.proxima())
        console.log(this.playlist.listarMusicas())
        console.log(this.playlist.anterior())
        console.log(this.playlist.listarMusicas())
    }
}

new Testes()
