const fs = require('fs');
fs.readFile('input', 'utf8', (err, data) => {
    max = 0;
    data.split("\n\n").forEach(part => {
        sum = part.split("\n").reduce((partialSum, a) => partialSum + a * 1, 0);
        max = Math.max(sum, max)
    });
    console.log(max);
});