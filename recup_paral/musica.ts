export class Musica {
    private nome: string;
    private tempo: number;

    public constructor(nome: string, tempo: number) {
        this.nome = nome;
        this.tempo = tempo;
    }

    public getNome(): string {
        return this.nome;
    }

    public getTempo(): number {
        return this.tempo;
    }

    public toString(): string {
        return `[Musica=${this.nome}-${this.tempo}]`;
    }
}
