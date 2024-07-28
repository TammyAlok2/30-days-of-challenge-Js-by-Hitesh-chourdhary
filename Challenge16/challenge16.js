
/********* DAY 16 : RECURSION  ****** */
 // ACTIVITY1 : BASIC RECURSION 
  // Task 1 : Write a recursion function to calculate the factorial of a number , log the result 

  function factorial(number ){
    // base case 
    if (number == 0 || number == 1) {
    return 1;
    }
    // recursive case 
    else{
        return number *factorial(number-1);
    }

  }

let ans =  factorial(5);
console.log(ans); 

// Task 2 : Write a recurisive functino to calculate the nth Fibonacci number, log the result
function fibonacii(n){
    // base case 
    if(n==0 || n==1){
        return n;
    }
    // recursive case 
    else{
        return fibonacii(n-1) + fibonacii(n-2)
    }
}

let ans1 = fibonacii(5)
console.log(ans1)

// ACTIVITY 2 : RECURSION WITH ARRAYS 
 // TASK3 : Write a recursive function to find the sum of all elements in an array. log the result 
 function sumOfArray(arr){
    // base case 
    if(arr.length ==0){
        return 0;
    }
    // recursive case 
    else{
        return arr[0]+sumOfArray(arr.slice(1));
    }
 }

 let arr = [1,2,3,4,5,6];
 let ans2 = sumOfArray(arr)
 console.log(ans2)

 //Task 4 : Write a recursive function to find the maximum element in an array . log the result 
 function maxElement(arr){
    // base case 
    if(arr.length ==1){
        return arr[0];
    }
    // recursive case 
    else{
        let max = maxElement(arr.slice(1));
        return Math.max(arr[0],max)
    }
}
console.log(maxElement([1, 2, 3, 4, 5]));

// ACTIVITY 3 : STRING MANIPULATION WITH RECURSION
// TASK 5 : Write a recursive function to reverse a string . log the result 
function reverseString(str){
    // base case 
    if(str.length == 0){
        return "";
    }
    // recursive case 
    else{
        return reverseString(str.slice(1)) + str[0];
    }
}

console.log(reverseString("Hello World")); // outputs "dlroW olleH"
// task 6 : Write a recursive function to check if a string is a palindrome .
function isPalindrome(str){
    // base case 
    if(str.length == 0 || str.length ==1){
        return true;
    }
    else {
        if(str[0]==str[str.length -1]){
            return isPalindrome(str.slice(1,str.length-1))
        }
        else {
            return false;
        }
    }
}

let str = [1,2,3,2,1];
console.log(isPalindrome(str.toString()))

// ACTIVITY 4 : RECURSIVE SEARCH 
 // TASK 7 : Write a recursive function to perform a binary search on a sorted array . log the index of target element
 function binarySearch(arr,target){
    // base case 
    if(arr.length ==0){
        return -1;
    }
    // recursive case
    else{
        let mid = Math.floor(arr.length/2);
        if(arr[mid] == target){
            return mid;
        }
        else if(arr[mid]> target){
            return binarySearch(arr.slice(0,mid),target)

        }

    }

 }

  // task 8 : write a recursive function to count the occurence of a target element in array and log
  function countOccurence(arr,target){
    //base case 
    if(arr.length ==0){
        return 0;
    }
    // recursive case 
    else{
        if(arr[0] == target){
            return 1 + countOccurence(arr.slice(1),target)

        }
        
    }
  }