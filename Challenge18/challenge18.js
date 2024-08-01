// ACITVITY 2 : sEARCHING ALGORTHIM
// TASK 4 : IMPLEMENT LINEAR SEARCH

let arr = [2, 3, 4, 5, 5, 6, 6, 7, 8];
let target = 8;

for (let i = 0; i < arr.length; i++) {
  if (target == arr[i]) {
    return i;
  }
  return -1;
}

// task 5 : implement binary search

let start = 0;
let end = arr.length;

while (start <= end) {
  let mid = (start + end) / 2;

  if (arr[mid] == target) {
    return mid;
  } else if (arr[mid] > target) {
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

// ACITVITY 3 : STRING ALGORTINGM
// TASK 6 : Write a function to count thte occurence of each charcter in a string . log the charcter count
function countChar(string) {
  let charCount = {};
  for (let char of string) {
    if (char in charCount) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  for (let char in charCount) {
    console.log(`${char}: ${charCount[char]}`);
  }
}
let str = "hi ankita love you alok ankita"
countChar(str)