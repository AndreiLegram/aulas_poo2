import { Aluno } from "./aluno";

export class Celula {
    private _proxima: Celula;
    private _elemento: Aluno;

    public constructor(proxima: Celula, elemento: Aluno) {
        this._proxima = proxima;
        this._elemento = elemento;
    }

    public setProxima(proxima: Celula): void {
        this._proxima = proxima;
    }
    public getProxima(): Celula {
        return this._proxima;
    }
    public getElemento(): Aluno {
        return this._elemento;
    }
}