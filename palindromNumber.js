/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const reversedStr = x.toString().split('').reverse().join('')
    return x==reversedStr;
};
