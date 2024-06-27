let vetor = [1, 8, 9, 2, 15, 20];

// início do método de ordenação
let posNãoOrdenado = vetor.length - 1;
let posÚltimaTroca = vetor.length - 1;

while (posÚltimaTroca > 0) {
    posÚltimaTroca = 0;
    for (let i = 0; i < posNãoOrdenado; i++) {
        if (vetor[i] > vetor[i + 1]) {
            let aux = vetor[i];
            vetor[i] = vetor[i + 1];
            vetor[i + 1] = aux;
            posÚltimaTroca = i;
            console.log("trocou");
        }
    }
    posNãoOrdenado = posÚltimaTroca;
}
