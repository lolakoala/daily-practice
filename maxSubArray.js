// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
//
// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.


function maxSubArray = (nums) => {
    let combo;
    let largestSum = 0;

    nums.forEach((num, index) => {
      for (let i = index + 1; i <= nums.length; i++) {

        combo = nums.slice(index, i);
        let sum = nums.slice(index, i).reduce((acc, num, index) => {
          return acc += num;
        }, 0);
        if (sum > largestSum) {
          largestSum = sum;
        }

      }
    })

    return largestSum;
}
