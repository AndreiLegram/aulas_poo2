import { Fila } from "./fila";

abstract class Atendimento {
    protected prefix: string;
    protected fila: Fila;
    protected senha: string;

    public entrar(prefix: string): boolean {
        return true;
    }

    public getSenha(): string {
        const num = this.fila.getTamanho();
        return `${this.prefix}${num}`;
    }
}

class Comercial extends Atendimento {
    public constructor() {
        super();
        this.prefix = "C";
        this.fila = new Fila();
    }
}

class Financeiro extends Atendimento {
    public constructor() {
        super();
        this.prefix = "F";
        this.fila = new Fila();
    }
}

