import { Pilha } from "./Pilha";

//Criação das pilhas
var pilha1 = new Pilha();
var pilha2 = new Pilha();
var pilha3 = new Pilha();

for (let i = 0; i < 3; i++) {
    var numero = Math.floor(Math.random() * 10);
    var numero2 = numero.toString();
    pilha1.empilhar(numero2);
}

for (let i = 0; i < 3; i++) {
    var numero = Math.floor(Math.random() * 10);
    var numero2 = numero.toString();
    pilha2.empilhar(numero2);
}

for (let i = 0; i < 3; i++) {
    var numero = Math.floor(Math.random() * 10);
    var numero2 = numero.toString();
    pilha3.empilhar(numero2);
}

//Mostrar as pilhas
console.log('Pilhas:')
console.log('Pilha1: ' + pilha1.toString());
console.log('Pilha2: ' + pilha2.toString());
console.log('Pilha3: ' + pilha3.toString());
var acumulador = 0;
var pontos1 = 0;
var pontos2 = 0;
var pontos3 = 0;

//Comparar os valores e atribuir os pontos
for (let i = 0; i < 3; i++) {
    var valor1 = Number(pilha1.desempilhar());
    var valor2 = Number(pilha2.desempilhar());
    var valor3 = Number(pilha3.desempilhar());
    var soma = valor1 + valor2 + valor3;

    if (valor1 > valor2 && valor1 > valor3) {
        if (acumulador > 0) {
            pontos1 += soma + acumulador;
            acumulador = 0;
        } else {
            pontos1 += soma;
        }
    } else if (valor2 > valor1 && valor2 > valor3) {
        if (acumulador > 0) {
            pontos2 += soma + acumulador;
            acumulador = 0;
        } else {
            pontos2 += soma;
        }
    } else if (valor3 > valor1 && valor3 > valor2) {
        if (acumulador > 0) {
            pontos3 += soma + acumulador;
            acumulador = 0;
        } else {
            pontos3 += soma;
        }
    } else {
        acumulador += valor1 + valor2 + valor3;
    }
}

//Verificar o vencedor
var vencedor = '';
if (pontos1 > pontos2 && pontos1 > pontos3) {
    vencedor = 'Pilha1';
} else if (pontos2 > pontos1 && pontos2 > pontos3) {
    vencedor = 'Pilha2';
} else if (pontos3 > pontos1 && pontos3 > pontos2) {
    vencedor = 'Pilha3';
} else {
    vencedor = 'Não há vencedores.'
}

//Mostrar resultados
console.log('\nPontuação:\nPilha1: ' + pontos1 + '\nPilha2: ' + pontos2 + '\nPilha3: ' + pontos3 + '\nO vencedor é: ' + vencedor);