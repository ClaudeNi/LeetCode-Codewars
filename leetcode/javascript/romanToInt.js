/**
 * @param {string} s
 * @return {number}
 
 Given a roman numeral, convert it to an integer.
 */
var romanToInt = function(s) {
    let num = 0;
    let letters = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }
    s = s.replace("IV", "IIII").replace("IX", "VIIII");
    s = s.replace("XL", "XXXX").replace("XC", "LXXXX");
    s = s.replace("CD", "CCCC").replace("CM", "DCCCC");
    for (let cha of s){
            num += letters[cha];
    }
    return num;
};
