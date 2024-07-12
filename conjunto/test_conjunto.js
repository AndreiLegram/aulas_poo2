"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestConjunto = void 0;
var conjunto_1 = require("./conjunto");
var TestConjunto = /** @class */ (function () {
    function TestConjunto() {
        this.exe1();
        this.exe2();
    }
    TestConjunto.prototype.exe1 = function () {
        var set = new conjunto_1.Conjunto();
        set.add(1);
        console.log(set.values()); // exibe [1]
        console.log(set.has(1)); // exibe true
        console.log(set.size()); // exibe 1
        set.add(2);
        console.log(set.values()); // exibe [1, 2]
        console.log(set.has(2)); // true
        console.log(set.size()); // 2
        set.delete(1);
        console.log(set.values()); // exibe [2]
        set.delete(2);
        console.log(set.values()); // exibe []
    };
    TestConjunto.prototype.exe2 = function () {
        var setA = new conjunto_1.Conjunto();
        setA.add(1);
        setA.add(2);
        setA.add(3);
        var setB = new conjunto_1.Conjunto();
        setB.add(3);
        setB.add(4);
        setB.add(5);
        setB.add(6);
        var unionAB = setA.union(setB);
        console.log(unionAB.values());
    };
    return TestConjunto;
}());
exports.TestConjunto = TestConjunto;
new TestConjunto();
