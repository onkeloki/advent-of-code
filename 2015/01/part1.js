const fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, data) => {
    var floor = 0;
    data.split("").forEach(sign => {
        (sign == "(") ? floor++ : floor--;
    })
    console.log(floor);
});