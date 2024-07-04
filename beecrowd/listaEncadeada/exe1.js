"use strict";
exports.__esModule = true;
exports.ListaLigada = exports.Celula = void 0;
var Celula = /** @class */ (function () {
    function Celula(proxima, elemento) {
        this._proxima = proxima;
        this._elemento = elemento;
    }
    Celula.prototype.setProxima = function (proxima) {
        this._proxima = proxima;
    };
    Celula.prototype.getProxima = function () {
        return this._proxima;
    };
    Celula.prototype.getElemento = function () {
        return this._elemento;
    };
    return Celula;
}());
exports.Celula = Celula;
var ListaLigada = /** @class */ (function () {
    function ListaLigada() {
        this._primeira = null;
        this._ultima = null;
        this._totalDeElementos = 0;
    }
    ListaLigada.prototype.adicionaNoComeco = function (elemento) {
        var nova = new Celula(this._primeira, elemento);
        this._primeira = nova;
        if (this._totalDeElementos == 0) {
            // caso especial da lista vazia
            this._ultima = this._primeira;
        }
        this._totalDeElementos++;
    };
    ListaLigada.prototype.adicionar = function (elemento) {
        if (this._totalDeElementos == 0) {
            this.adicionaNoComeco(elemento);
        }
        else {
            var nova = new Celula(null, elemento);
            this._ultima.setProxima(nova);
            this._ultima = nova;
            this._totalDeElementos++;
        }
    };
    ListaLigada.prototype.toString = function () {
        // Verificando se a Lista está vazia
        if (this._totalDeElementos == 0) {
            return "[]";
        }
        var str = "[";
        var atual = this._primeira;
        // Percorrendo até o penúltimo elemento.
        for (var i = 0; i < this._totalDeElementos - 1; i++) {
            str += atual.getElemento();
            str += ", ";
            atual = atual.getProxima();
        }
        // último elemento
        str += atual.getElemento();
        str += "]";
        return str;
    };
    ListaLigada.prototype.posicaoOcupada = function (posicao) {
        return posicao >= 0 && posicao < this._totalDeElementos;
    };
    ListaLigada.prototype.pegaCelula = function (posicao) {
        if (!this.posicaoOcupada(posicao)) {
            throw new Error("Posição não existe");
        }
        var atual = this._primeira;
        for (var i = 0; i < posicao; i++) {
            atual = atual.getProxima();
        }
        return atual;
    };
    ListaLigada.prototype.adiciona = function (posicao, elemento) {
        if (posicao == 0) { // No começo.
            this.adicionaNoComeco(elemento);
        }
        else if (posicao == this._totalDeElementos) { // No fim.
            this.adicionar(elemento);
        }
        else {
            var anterior = this.pegaCelula(posicao - 1);
            var nova = new Celula(anterior.getProxima(), elemento);
            anterior.setProxima(nova);
            this._totalDeElementos++;
        }
    };
    ListaLigada.prototype.pega = function (posicao) {
        return this.pegaCelula(posicao).getElemento();
    };
    ListaLigada.prototype.removeDoComeco = function () {
        if (!this.posicaoOcupada(0)) {
            throw new Error("Posição não existe");
        }
        this._primeira = this._primeira.getProxima();
        this._totalDeElementos--;
        if (this._totalDeElementos == 0) {
            this._ultima = null;
        }
    };
    ListaLigada.prototype.removeDoFim = function () {
        if (!this.posicaoOcupada(this._totalDeElementos - 1)) {
            throw new Error("Posição não existe");
        }
        if (this._totalDeElementos == 1) {
            this.removeDoComeco();
        }
        else {
            var penultima = this.pegaCelula(this._totalDeElementos - 2);
            penultima.setProxima(null);
            this._ultima = penultima;
            this._totalDeElementos--;
        }
    };
    ListaLigada.prototype.remove = function (posicao) {
        if (!this.posicaoOcupada(posicao)) {
            throw new Error("Posição não existe");
        }
        if (posicao == 0) {
            this.removeDoComeco();
        }
        else if (posicao == this._totalDeElementos - 1) {
            this.removeDoFim();
        }
        else {
            var anterior = this.pegaCelula(posicao - 1);
            var atual = anterior.getProxima();
            var proxima = atual.getProxima();
            anterior.setProxima(proxima);
            this._totalDeElementos--;
        }
    };
    ListaLigada.prototype.contem = function (Object) {
        var atual = this._primeira;
        while (atual != null) {
            if (atual.getElemento().equals(elemento)) {
                return true;
            }
            atual = atual.getProxima();
        }
        return false;
    };
    ListaLigada.prototype.tamanho = function () {
        return this._totalDeElementos;
    };
    return ListaLigada;
}());
exports.ListaLigada = ListaLigada;
