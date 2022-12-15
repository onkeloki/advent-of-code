const fs = require('fs');
fs.readFile('input', 'utf8', (err, data) => {
    data.split("\n").forEach(itemA => {
        data.split("\n").forEach(itemB => {
            data.split("\n").forEach(itemC => {
                if ((+itemA) + (+itemB) + (+itemC) == 2020) {
                    console.log(itemA * itemB * itemC);
                }
            })
        })
    });
});