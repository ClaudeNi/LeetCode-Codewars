/**
 * @param {number} x
 * @return {boolean}
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.
For example, 121 is a palindrome while 123 is not.
 */
var isPalindrome = function(x) {
    const rev = x.toString().split("").reverse().join("")
    if (x == rev) {
        return true
    }
    return false
};
