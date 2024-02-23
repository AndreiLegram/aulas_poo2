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




const entrada = require('fs').readFileSync('/dev/stdin', 'utf8')
  .split('\n')
  .map(x => Number(x));

const pares = [];
const impares = [];

for (let i = 0; i < 15; i++) {
  const n = entrada.shift();

  if (impares.length == 5) {
      imprimeNumeros(impares, false);
  }
  else if (pares.length == 5) {
      imprimeNumeros(pares, true);
  }

  if (n % 2 === 0) {
      pares.push(n);
  }
  else
  {
      impares.push(n);
  }
}

if (impares.length > 0) {
    imprimeNumeros(impares, false);
}

if (pares.length > 0) {
    imprimeNumeros(pares, true);
}

function imprimeNumeros(numeros, saoPares) {
  for (let i = 0; i < numeros.length; i++) {
    console.log(`${saoPares ? 'par' : 'impar'}[${i}] = ${numeros[i]}`);
  }

  numeros.length = 0;
}


//esse da runtime error







let imprime = (nome, vetor) => {
    for (let i = 0; i < vetor.length; ++i) {
        console.log(`${nome}[${i}] = ${vetor[i]}`);
    }
};

let impar = [];
let par = [];
for (let i = 0; i < 15; ++i) {
    let valor = parseInt(lines.shift());

    if (Math.abs(valor) % 2) {
        impar.push(valor);

        if (impar.length === 5) {
            imprime("impar", impar);
            impar = [];
        }
    } else {
        par.push(valor);

        if (par.length === 5) {
            imprime("par", par);
            par = [];
        }
    }
}

imprime("impar", impar);
imprime("par", par);


//esse é de baitola
