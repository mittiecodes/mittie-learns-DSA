/* 21/11/2025
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

Example 1:
Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

*/

function longestOnes(nums, k) {
    let left = 0;        // left end of window
    let maxLen = 0;      // max length of consecutive 1's
    let zerosCount = 0;  // number of zeros in current window

    for (let right = 0; right < nums.length; right++) {
        // If we see a 0, increment zerosCount
        if (nums[right] === 0) zerosCount++;

        // If zeros exceed k, shrink the window from the left
        while (zerosCount > k) {
            if (nums[left] === 0) zerosCount--;
            left++;
        }

        // Update max length
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

// Example:
const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
const k = 2;
console.log(longestOnes(nums, k)); // Output: 6
console.log(nums.length)
