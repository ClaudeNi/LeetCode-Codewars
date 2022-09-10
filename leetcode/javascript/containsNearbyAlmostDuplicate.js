/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
You are given an integer array nums and two integers indexDiff and valueDiff.

Find a pair of indices (i, j) such that:

i != j,
abs(i - j) <= indexDiff.
abs(nums[i] - nums[j]) <= valueDiff, and
Return true if such pair exists or false otherwise.
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(i - j) <= indexDiff && Math.abs(nums[i] - nums[j]) <= valueDiff) {
                return true;
            }
        }
    }
    return false;
};
