const lines = [4, 1, 6, 8, 3];

for (let j = 0; lines.length > j; j++) {
    for (let i = 0; lines.length > i; i++) {
        if (lines[i] > lines[i + 1]) {
            let numeroMaior = lines[i + 1];
            let numeroMenor = lines[i];
            lines[i] = numeroMaior
            lines[i + 1] = numeroMenor
        }
    }
}

console.log(lines);