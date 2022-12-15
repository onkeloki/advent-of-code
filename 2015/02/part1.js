const fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, input) => {
    var paper = 0;
    input.split("\n").forEach(box => {
        sides = box.split("x").sort((a, b) => a - b);
        paper += 2 * sides[0] * sides[1] + 2 * sides[1] * sides[2] + 2 * sides[0] * sides[2];
        paper += sides[0] * sides[1];
    })
    console.log(paper);
});