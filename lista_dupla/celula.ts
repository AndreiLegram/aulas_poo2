import { Carro } from "./carro";

export class Celula {
    private _proxima: Celula;
    private _anterior: Celula;
    private _elemento: Carro;

    public constructor(proxima: Celula | null, anterior: Celula | null, elemento: Carro) {
        this._proxima = proxima;
        this._anterior = anterior;
        this._elemento = elemento;
    }

    public setProxima(proxima: Celula): void {
        this._proxima = proxima;
    }
    public getProxima(): Celula {
        return this._proxima;
    }
    public getElemento(): Carro {
        return this._elemento;
    }
    public setAnterior(anterior: Celula|null): void {
        this._anterior = anterior
    }
    public getAnterior(): Celula {
        return this._anterior;
    }
}