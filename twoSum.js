// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function(nums, target) {
    let answers = [];
    while (answers.length < 2) {
        for (let i = 0; i < nums.length; i++) {
            nums.forEach((num, index) => {
                if (i !== index && num + nums[i] === target) {
                   answers = i < index ? [i, index] : [index, i];

                }
            })
        }
    }
    return answers;
};
