var Objeto = /** @class */ (function () {
    function Objeto() {
    }
    return Objeto;
}());
var var1 = new Objeto();
var var2 = var1;
var2.name = 'teste';
var1.name = 'teste1';
console.log(var1);
console.log(var2);
