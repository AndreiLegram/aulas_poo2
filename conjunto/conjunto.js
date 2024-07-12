"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conjunto = void 0;
var Conjunto = /** @class */ (function () {
    function Conjunto() {
        this._items = {};
    }
    Conjunto.prototype.has = function (element) {
        return Object.prototype.hasOwnProperty.call(this._items, element);
    };
    Conjunto.prototype.add = function (element) {
        if (!this.has(element)) {
            this._items[element] = element;
            return true;
        }
        return false;
    };
    Conjunto.prototype.delete = function (element) {
        if (this.has(element)) {
            delete this._items[element];
            return true;
        }
        return false;
    };
    Conjunto.prototype.clear = function () {
        this._items = {}; // {2}
    };
    Conjunto.prototype.size = function () {
        var count = 0;
        for (var key in this._items) { // {2}
            if (this._items.hasOwnProperty(key)) { // {3}
                count++; // {4}
            }
        }
        return count;
    };
    Conjunto.prototype.values = function () {
        var values = [];
        for (var key in this._items) { // {1}
            if (this._items.hasOwnProperty(key)) { // {2}
                values.push(key);
            }
        }
        return values;
    };
    Conjunto.prototype.union = function (otherSet) {
        var unionSet = new Conjunto();
        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        values = otherSet.values();
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        return unionSet;
    };
    ;
    Conjunto.prototype.intersection = function (otherSet) {
        var result = [];
        for (var key in this._items) {
            if (otherSet.hasOwnProperty(key)) {
                result.push(key);
            }
        }
        return result;
    };
    Conjunto.prototype.difference = function (otherSet) {
        var result = [];
        for (var key in this._items) {
            if (!otherSet.hasOwnProperty(key)) {
                result.push(key);
            }
        }
        return result;
    };
    Conjunto.prototype.isSubsetOf = function (otherSet) {
        for (var key in this._items) {
            if (!otherSet.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    };
    return Conjunto;
}());
exports.Conjunto = Conjunto;
