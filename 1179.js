var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\r\n');

var pares = [];
var impares = [];
var ip = 0;
var ii = 0;
for (let i = 0; i < lines.length; i++) {
    if (lines[i] % 2 == 0) {
        if (ip == 5) {
            ip = 0;
        }
        pares[ip] = lines[i];
        ip++;
    } else {
        if (ii == 5) {
            ii = 0;
        }
        impares[ii] = lines[i];
        ii++
    }
    console.log('X[' + i + '] = ' + Number(lines[i]));
}

// ta todo cagado nao funciona etc
