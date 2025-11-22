// 21/11/2025
nums = [1,12,-5,-6,50,3], k = 4 

 let findAvg = (nums, k) => {
    let arraySum = 0;

for (let i = 0; i < k; i++){
    arraySum += nums[i];
}
return arraySum/k ;
 }

 console.log(findAvg(nums, k));