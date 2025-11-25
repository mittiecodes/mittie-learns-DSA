/*
function multiply(arr) {
    let product = 1;
    for (let i = 0; i < arr.length ; i++){
        product *= arr[i];
    }
    return product;
} 
console.log(multiply([1,2,3,4,5]))
*/

// turning this into recursive function
/*
let arr = [1, 2, 3, 4, 5]
function multiply(arr) {
    console.log(arr);
    if (arr.length <= 0) {
        return 1;
    }
    else {
        return arr[arr.length - 1] * multiply(arr.slice(0, arr.length - 1));
    }
}
console.log(multiply(arr))
*/
// Most asked DSA Question

// Ques1: Factorial of n
//  n = 5! = 5 * 4 * 3 * 2 * 1;

function factorial(n){
    if (n===0) return 1; // base case
    else return n * factorial(n - 1);
        
}
console.log(factorial(10));

// Quest 2: Create an array with the range of numbers
// input  start = 1 end = 5 ;

function rangeOfNumbers(startNum, endNum){
    if (endNum < startNum) {
        return [];
    } else {
        const numbers = rangeOfNumbers(startNum, endNum-1);
        numbers.push(endNum);
        return numbers;
    }
}
console.log(rangeOfNumbers(0,5))