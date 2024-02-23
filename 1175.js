var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let newArray = [];
for (let i = lines.length ; i === 0 ; i--) {
    newArray.push(parseInt(lines[i]));
}

for (let j = 0 ; j < newArray.length ; j++ ) {
    console.log('N['+ i + '] =' + Number(newArray[i]));
}
