const lines = [4, 1, 6, 8, 3];

for (let i = 1 ; i < lines.length ; i++) {
    let menorNumero = lines[i];
    for (let j = 0 ; j < lines.length ; j++) {
        if (lines[j] < menorNumero) {
            menorNumero = lines[j]
        }
    }
    let temp = lines[i];
    lines[i] = lines[menorNumero];
    lines[menorNumero] = temp;
}

console.log(lines);