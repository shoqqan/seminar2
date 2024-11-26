/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = []
    let isBreak = false
    for (let i = 0; i < nums.length; i++) {
        if (isBreak) {
            break
        }
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                if (nums[j] + nums[i] === target) {
                    result = [i, j]
                    isBreak = true
                    break
                }
            }

        }
    }
    return result
};
