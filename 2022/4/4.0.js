const fs = require('fs');
fs.readFile('input', 'utf8', (err, data) => {
    /*    data = `2-4,6-8
   2-3,4-5
   5-7,7-9
   2-8,3-7
   6-6,4-6
   2-6,4-8` */
    function rangeFullyWraps(r1, r2) {
        r1 = r1.split("-");
        r2 = r2.split("-");
        if ((r1[0] * 1 <= r2[0] * 1) && (r1[1] * 1 >= r2[1] * 1)) {
            // console.log(r1, "wraps", r2);
            return true;
        }
        return false;

    }

    function doesOverlap(r1, r2) {
        r1 = r1.split("-");
        r2 = r2.split("-");

        a = r1[0] * 1;
        b = r1[1] * 1;
        c = r2[0] * 1;
        d = r2[1] * 1;
        arr = [];
        strA = "";
        strB = "";


        for (i = a; i <= b; i++) {
            strA += i + "-"
        }
        for (i = c; i <= d; i++) {
            strB += i + "-"
        }
        fullstr = strA + "" + strB;
        x = fullstr.split("-").length;
        y = [...new Set(fullstr.split("-"))].length;
        console.log("x", x);
        console.log("y", y);
        overlaps = (x != y);
        console.log(overlaps);
        /* 
          uniqueChars = [...new Set(arr)];
          console.log(uniqueChars);
          console.log(uniqueChars); */
        return x != y;


    }

    counter = 0;
    overlap = 0;
    data.split("\n").forEach(pairs => {
        p1 = pairs.split(",")[0];
        p2 = pairs.split(",")[1];
        if (rangeFullyWraps(p1, p2) ||
            rangeFullyWraps(p2, p1)) {
            counter++;
        }
        if (doesOverlap(p1, p2)) {
            overlap++;
        }
    });
    console.log("count", counter);
    console.log("overlap", overlap);
});