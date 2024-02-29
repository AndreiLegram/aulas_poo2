const lines = [4, 1, 6, 8, 3];

for (let i = 1 ; i < lines.length ; i++) {
    let elementoAtual = lines[i];
    let j = i - 1;
    while (j >= 0 && lines[j] > elementoAtual) {
        lines[j + 1] = lines[j];
        j = j - 1;
    }

    lines[j + 1] = elementoAtual;
}

console.log(lines);