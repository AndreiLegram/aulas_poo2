class Objeto {
    nome: string;

    public adicionar() {

    }

    public adicionaNoComeco() {

    }
}

let var1 = new Objeto();
let var2 = var1;
var2.nome = 'teste';
var1.nome = 'teste 1';
console.log(var1);
console.log(var2);
