const fs = require('fs');
const path = require('path');
console.log("=== ===");
console.log("===X===");
console.log("=== ===");
fs.readFile('input', 'utf8', (err, data) => {
    folders = [];
    sizesMap = new Map();
    currentPath = [];
    /*    data = `$ cd /
   $ cd a
   $ cd b
   $ cd ..
   $ cd ..`; */
    data.split("\n").forEach(row => {
        if (getCmd(row) == "down") { currentPath.push(getDownFolderName(row)) }
        else if (getCmd(row) == "up") { currentPath.pop(); }
        else {
            upath = currentPath.join("/");
            if (!sizesMap.has(upath)) {
                sizesMap.set(upath, 0)
            }
            if (row == "$ ls") {
                //  console.log("list", upath);
            } else {
                size = row.split(" ")[0];
                if (size != "dir") {
                    curr = sizesMap.get(upath);
                    sizesMap.set(upath, curr + (size * 1))
                }
            }
        }

    })
    sum = 0;
    console.log(sizesMap);
    sizesMap.forEach((x, y) => {
        if (x < 100000) {
            console.log(x);
            sum += x;
        }
    });
    console.log("xx", sum);
});


function getCmd(row) {
    if (isUp(row)) return "up";
    if (isDown(row)) return "down";
    return "??!";
}
function isUp(row) {
    return (row == "$ cd ..");
}
function getDownFolderName(row) {
    return row.split("$ cd ").join("");
}
function isDown(row) {
    return (row.substr(0, 4) == "$ cd" && row.indexOf("..") == -1);
}
