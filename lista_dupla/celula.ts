import { Carro } from "./carro";

export class Celula {
    private _proxima: Celula|null;
    private _anterior: Celula|null;
    private _elemento: Carro;

    public constructor(proxima: Celula | null, anterior: Celula | null, elemento: Carro) {
        this._proxima = proxima;
        this._anterior = anterior;
        this._elemento = elemento;
    }

    public setProxima(proxima: Celula|null): void {
        this._proxima = proxima;
    }
    public getProxima(): Celula|null {
        return this._proxima;
    }
    public getElemento(): Carro {
        return this._elemento;
    }
    public setAnterior(anterior: Celula|null): void {
        this._anterior = anterior
    }
    public getAnterior(): Celula|null {
        return this._anterior;
    }
}