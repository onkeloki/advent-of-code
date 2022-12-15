const fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, data) => {
    var floor = 0;
    let step = 0;
    data.split("").forEach((sign, index, arr) => {
        step++;
        (sign == "(") ? floor++ : floor--;
        if (floor == -1) {
            console.log(step);
            arr.length = 0;
        }
    })
});