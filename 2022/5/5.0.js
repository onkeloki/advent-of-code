stacks = [
    "MJCBFRLH",
    "ZCD",
    "HJFCNGW",
    "PJDMTSB",
    "NCDRJ",
    "WLDQPJGZ",
    "PZTFRH",
    "LVMG",
    "CBGPFQRJ",
]
console.log("========")

function debug() {
    for (i = 0; i < stacks.length; i++) {
        console.log((i + 1) + " " + stacks[i]);
    }
}

function moveboxNew(times, from, to) {
    from = from - 1;
    to = to - 1;
    // boxStack = stacks[from].split("").pop();
    boxStack = stacks[from].substr(times * -1);
    if (boxStack) {
        stacks[from] = stacks[from].substring(0, stacks[from].length - boxStack.length);
        if (!stacks[to]) {
            stacks[to] = boxStack
        } else {
            stacks[to] += boxStack
        }
    }
}

function moveboxOld(times, from, to) {
    from = from - 1;
    to = to - 1;
    for (i = 0; i < times; i++) {
        box = stacks[from].split("").pop();
        if (box) {
            stacks[from] = stacks[from].substring(0, stacks[from].length - 1);
            if (!stacks[to]) {
                stacks[to] = box
            } else {
                stacks[to] += box
            }
        }
    }
}




const fs = require('fs');
const { sep } = require('path');

fs.readFile('input.txt', 'utf8', (err, data) => {
    dummy = false;
    if (dummy) {
        data = `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`
        stacks = [
            "ZN",
            "MCD",
            "P"
        ]
    }
    debug();

    data.split("\n").forEach(r => {
        //  console.log(step);
        if (r[0] == "m") {
            commands = r.split(" ");
            times = commands[1] * 1;
            from = commands[3] * 1;
            to = commands[5] * 1;
            console.log(commands);
            //console.log(times, from, to);

            //moveboxOld(times, from, to);
            moveboxNew(times, from, to);


            debug();
        }
    });

});

