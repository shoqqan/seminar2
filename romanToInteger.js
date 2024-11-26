/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romans = {
        ['I']: 1,
        ['V']: 5,
        ['X']: 10,
        ['L']: 50,
        ['C']: 100,
        ['D']: 500,
        ['M']: 1000
    }
    let sum= 0;
    for (let i = 0; i < s.length; i++){
        const current = romans[s[i]];
        const next = romans[s[i+1]];
        if (current<next){
            sum -= current;
        }else{
            sum += current;
        }
    }
    return sum;
};


