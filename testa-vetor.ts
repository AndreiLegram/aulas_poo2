	
import { Vetor } from "./vetor";

export class TestaVetor {
    private vetor: Vetor;

    public constructor(vetor: Vetor) {
        this.vetor = vetor;
    }

    public testar() {
        try {
            this.vetor.adicionar("abacaxi")
            this.vetor.adicionar("banana")
            this.vetor.adicionar("cereja")
            this.vetor.adicionar("")
            this.vetor.adicionar("")

            console.log(this.vetor.getTamanho())
            console.log(this.vetor.toString())
            console.log(this.vetor.buscar(2))
            console.log(this.vetor.busca("cereja"))
            this.vetor.adicionarPos(1, "damasco")
            this.vetor.adicionarPos(3, "ema")
            this.vetor.adicionarPos(5, "figo")
            this.vetor.remove(2)
            this.vetor.remove(this.vetor.busca("abacaxi"))
            console.log(this.vetor.toString())
            console.log(this.vetor.getTamanho())
        } catch (error) {
            console.log(error)
        }
    }

}

new TestaVetor(new Vetor()).testar()
