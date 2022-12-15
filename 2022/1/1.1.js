const fs = require('fs');
fs.readFile('input', 'utf8', (err, data) => {
    max = 0;
    allSums = [];
    data.split("\n\n").forEach(part => {
        sum = part.split("\n").reduce((partialSum, a) => partialSum + a * 1, 0);
        allSums.push(sum);
    });
    allSums.sort(function (a, b) {
        return b - a;
    });
    i = 0;
    res = 0;
    allSums.forEach(part => {
        if (i < 3) {
            res += part * 1;
        }
        i++;
    });
    console.log(res);
});

