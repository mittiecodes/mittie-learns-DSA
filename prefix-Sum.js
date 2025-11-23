/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
*/ 

nums = [3,1,2,10,1]; 
var runningSum = function(nums) {
    let runningSum = 0;
    let runningSumArray = []
    for (let i = 0; i< nums.length; i++){
        runningSum += nums[i];
        runningSumArray.push(runningSum);
    }
    return runningSumArray;
};
console.log(runningSum(nums));