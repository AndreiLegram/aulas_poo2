const vetor = [9, 1, 8, 2, 15, 20]

for (let j = 1; j < vetor.length; j++) {
    let i = 0;
    let posElemento = j; // posição do elemento que está sendo analisado
    let posInsercao = j; // posição em que o elemento deve ser inserido

    while (i < posElemento) {
        if (vetor[posElemento] < vetor[i]) {
            posInsercao = i;
            i = posElemento;
        }
        i++;
    }
    if (posInsercao < posElemento) { // há necessidade de reposicionamento
        let aux = vetor[posElemento];
        for (i = posElemento; i > posInsercao; i--) {
            vetor[i] = vetor[i - 1];
            console.log(vetor)
        }
        vetor[posInsercao] = aux;
        console.log(vetor)
    }
}
