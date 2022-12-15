
function getFirstMixedPattern(str) {
    for (i = 0; i < str.length; i++) {
        check = str.substr(i, 14);
        different = [...new Set(check.split(""))].length;
        if (different == 14) {
            //console.log(i + 4);
            return i + 14;
        }
        // console.log(different);

    }


}


str = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw";
sum = 0;
sum += getFirstMixedPattern(str);

const fs = require('fs');
fs.readFile('input', 'utf8', (err, data) => {
    d = getFirstMixedPattern(data);
    console.log(d);
});