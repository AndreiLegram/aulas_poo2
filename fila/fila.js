"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fila = void 0;
var Fila = /** @class */ (function () {
    function Fila() {
        this.elementos = [];
        this.tamanho = 0;
    }
    Fila.prototype.enfileirar = function (elemento) {
        this.elementos[this.tamanho] = elemento;
        this.tamanho++;
    };
    Fila.prototype.estaVazia = function () {
        return this.tamanho === 0;
    };
    Fila.prototype.proximoElemento = function () {
        return this.elementos[this.tamanho];
    };
    Fila.prototype.desenfileirar = function () {
        var elem = this.elementos[this.tamanho - 1];
        this.tamanho--;
        return elem;
    };
    Fila.prototype.toString = function () {
        var s = "[";
        for (var i = 0; i < this.tamanho - 1; i++) {
            s += this.elementos[i];
            s += ",";
        }
        if (this.tamanho > 0) {
            s += this.elementos[this.tamanho - 1];
        }
        s += "]";
        return s.toString();
    };
    return Fila;
}());
exports.Fila = Fila;
