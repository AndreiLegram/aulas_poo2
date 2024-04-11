import { Fila } from "./fila";

abstract class Atendimento {
    protected prefix: string;
    protected fila: Fila;
    protected numSenha: number;

    public constructor() {
        this.fila = new Fila();
        this.numSenha = 0;
    }

    private getSenha(): string {
        this.numSenha++;
        const number = this.numSenha.toString().padStart(3, '0');
        return `${this.prefix}${number}`;
    }

    public reiniciarSenha(): void {
        this.numSenha = 0;
    }

    public entrar(nome: string): string {
        this.fila.enfileirar(nome);
        return this.getSenha();
    }

    public chamar(): string {
        return `${this.constructor.name} - ${this.fila.desenfileirar()}`;
    }
}

class Comercial extends Atendimento {
    public constructor() {
        super();
        this.prefix = "C";
    }
}

class Financeiro extends Atendimento {
    public constructor() {
        super();
        this.prefix = "F";
    }
}

const comercial = new Comercial();
console.log(comercial.entrar("Fulano"));
console.log(comercial.chamar());
console.log(comercial.entrar("Beltrano"));
console.log(comercial.entrar("Ciclano"));
console.log(comercial.chamar());

const financeiro = new Financeiro();
console.log(financeiro.entrar("Fulano"));
console.log(financeiro.entrar("Beltrano"));
console.log(financeiro.chamar());
console.log(financeiro.entrar("Ciclano"));

console.log(comercial.entrar("Jorge"));
console.log(comercial.chamar());
console.log(financeiro.chamar());
console.log(financeiro.entrar("Claudio"));
console.log(financeiro.chamar());