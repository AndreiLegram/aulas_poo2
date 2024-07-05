export class Aluno {
    private nome: string;
    private idade: number;

    public constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    public getNome() {
        return this.nome;
    }
    public getIdade() {
        return this.idade;
    }
}