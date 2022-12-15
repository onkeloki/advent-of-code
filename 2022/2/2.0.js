const fs = require('fs');

function getDrawHand(his) {
    if (his == "A") return "X";
    if (his == "B") return "Y";
    if (his == "C") return "Z";
}
function getWinHand(his) {
    if (his == "A") return "Y";
    if (his == "B") return "Z";
    if (his == "C") return "X";
}
function getLooseHand(his) {
    if (his == "A") return "Z";
    if (his == "B") return "A";
    if (his == "C") return "Y";
}

fs.readFile('input', 'utf8', (err, data) => {
    // A X = Stein 1
    // B Y = papier 2
    // C Z = Schere 3
    fullscore = 0;
    wins = 0;
    draws = 0;
    data.split("\n").forEach(part => {
        mypionts = 0;
        hands = part.split(" ");
        his = hands[0];
        my = hands[1];


        draw = ["AX", "BY", "CZ"];
        won = ["AY", "BZ", "CX"];
        willLoose = false;
        game = his + "" + my;
        willWin = (won.indexOf(game) >= 0);
        willDraw = (draw.indexOf(game) >= 0);
        if (!willDraw && !willWin) {
            willLoose = true;
        }


        if (my == "X" && !willLoose) {
            // X = need to LOSE
            my = getLooseHand(his);




        } else if (my == "Y" && !willDraw) {
            // Y = need to draw
            my = getDrawHand(his);
        } else if (my == "Z" && !willWin) {
            // nedd to win
            my = getWinHand(his);

        }


        game = his + "" + my;
        console.log(game);
        hasWon = (won.indexOf(game) >= 0);
        hasDraw = (draw.indexOf(game) >= 0);


        if (hasWon) {
            wins++;
        }
        if (hasDraw) {
            draws++;
        }
        if (my == "X") mypionts = 1;
        if (my == "Y") mypionts = 2;
        if (my == "Z") mypionts = 3;
        fullscore += mypionts;
        //console.log(my);
    });
    // X = stein
    // Y = papier 
    // z = schere oh ha ha
    console.log("wins", wins);
    console.log("draws", draws);
    console.log(fullscore);
    end = (wins * 6) + (draws * 3) + fullscore;
    console.log(end);

}); 