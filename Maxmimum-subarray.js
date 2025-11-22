/* 20 -21 /11/2025
You are given an integer array nums consisting of n elements, and an integer k.
Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
*/ 

nums = [1,12,-5,-6,50,3], k = 4

var findMaxAverage = function(nums, k) {
    // Step 1: sum of first k elements
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }

    let maxSum = windowSum;

    // Step 2: slide the window across the array
    for (let i = k; i < nums.length; i++) {
        windowSum += nums[i] - nums[i - k]; 
        maxSum = Math.max(maxSum, windowSum);
    }

    // Step 3: return maximum average
    return maxSum / k;
};
