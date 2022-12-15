const { group } = require('console');
const fs = require('fs');
const { off } = require('process');
console.log("-----");

function getValue(item) {
    alphabet = "abcdefghijklmnopqrstuvwxyz";
    priority = alphabet + "" + alphabet.toUpperCase();
    return priority.indexOf(item) + 1;
}
function getgroupBadge(groups) {
    a = groups[0];
    b = groups[1];
    c = groups[2];
    found = false;
    point = 0;
    a.split("").forEach(char => {
        if (!found) {
            bhas = (b.indexOf(char) > -1);
            chas = (c.indexOf(char) > -1);
            if (bhas && chas) {
                found = true;
                console.log("has", char);
                point = getValue(char);
            }
        }

    })
    return point;

}
function compare(tA, tB) {
    found = false;
    num = 0;
    tA.split("").forEach(aItem => {
        if (!found) {
            if (tB.indexOf(aItem) > -1) {
                num = getValue(aItem);
                found = true;
            }
        }
    });

    return num;
}

fs.readFile('input', 'utf8', (err, data) => {
    /*  data = `vJrwpWtwJgWrhcsFMMfFFhFp
 jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
 PmmdzqPrVvPwwTWBwg
 wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
 ttgJtRGJQctTZtZT
 CrZsJsPPZsGzwwsLwLmpwMDw` */
    var sum = 0;
    arr = data.split("\n");
    arr.forEach(backpack => {
        itemsCount = backpack.length;
        trayA = backpack.substr(0, itemsCount / 2);
        trayB = backpack.substr(itemsCount / 2, itemsCount / 2);
        f = compare(trayA, trayB);

        sum += f;
    });
    console.log("die summe", sum);

    gcount = 0;
    var group = [];
    var sum2 = 0;
    arr.forEach(backpack => {
        if (gcount == 0) {
            console.log("...");
            group = [];
        }
        group.push(backpack)
        gcount++;
        if (gcount > 2) {

            sum2 += getgroupBadge(group);
            gcount = 0;
        }
    });
    console.log(sum2);
});
