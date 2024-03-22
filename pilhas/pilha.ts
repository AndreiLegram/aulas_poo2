export class Pilha {
    private elementos;
    private int tamanho;
    public constructor() {
        this.elementos = {};
        this.tamanho = 0;
    }

    public empilhar(elemento:string):void{} // Insere um elemento no topo da pilha
    public topo():string{} // retorna o elemento do topo da pilha
    public desempilhar():string{} // retorna e remove o elemento do topo da pilha
    public getTamanho():number{} //retorna o tamanho da pilha
    public estavazia():boolean{} //retorna se a pilha está vazia
    public toString():string{} // retorna o vetor 

}
