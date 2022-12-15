const fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, data) => {
    var paper = 0;
    var ribbon = 0;
    data.split("\n").forEach(box => {
        box = box.split("x").sort((a, b) => a - b);
        ribbon += (+box[0]) + (+box[0]) + (+box[1]) + (+box[1]);
        ribbon += box[0] * box[1] * box[2];

    })
    console.log(ribbon);
});