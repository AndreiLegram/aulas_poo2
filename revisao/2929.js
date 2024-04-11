// https://judge.beecrowd.com/en/problems/view/2929

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var pilha = []
const numero_operacoes = Number(lines[0]);

for (var i = 1; i <= numero_operacoes; i++) {
    if (String(lines[i]).substring(0, 4) === 'PUSH') {
        let operacao = String(lines[i]).split(' ');
        pilha.push(Number(operacao[1]));
    } else if (pilha.length === 0) {
        console.log("EMPTY");
    } else if (String(lines[i]).substring(0, 3) === 'POP') {
        pilha.pop();
    } else if (String(lines[i]).substring(0, 3) === 'MIN') {
        console.log(Math.min(...pilha));
    }
}