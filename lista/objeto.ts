class Objeto {
    name: string;
}

let var1 = new Objeto();
let var2 = var1;

var2.name = 'teste';
var1.name = 'teste1';

console.log(var1);
console.log(var2);