var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let valor = lines[0]
let newValor = valor
for (var i = 0; i < 10; i++) {
    console.log('N[' + i + '] = ' + Number(newValor));
    newValor = newValor * 2;
}
