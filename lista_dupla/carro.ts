export class Carro {
    private modelo: string;
    private ano: number;
    private potencia: number;

    public constructor(modelo: string, ano: number, potencia: number) {
        this.modelo = modelo;
        this.ano = ano;
        this.potencia = potencia;
    }

    public toString(): string {
        return `[Carro=${this.modelo}-${this.ano}-${this.potencia}]`;
    }
}
