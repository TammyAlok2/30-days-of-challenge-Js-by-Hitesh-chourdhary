// Day 6 : Arrays 
// ACTIVITY : 1  ARRAY CREATION AND ACCESS 
  // Task 1 : Create an array of numbers from 1 to 5 and log the console 

  let arr = [1,2,3,4,5] // method 1 : Array Literal Notation
  //console.log(arr)

  let arr1 = new Array(1,2,3,4,5) // method 2 : Array Constructor 
  //console.log(arr1)

  let arr2 = Array.of(1,2,3,4,5) // method 3 : Array.of() method 
  //console.log(arr2)

  let arr3 = Array.from('hello')  // string to array 
  //console.log(arr3)

  let arr4 = [...('hello')]     // string to array using spread operator 
  //console.log(arr4) 


  let arr5 = []             // using a loop 
  for(let i =0;i<5;i++){
    arr5.push(i)
  }
  //console.log(arr5)

  let arr6 = new Array(5).fill(0);   // using fill method 
  //console.log(arr6)

  let arr7 = new Array(5).fill().map((_,i)=> i+1);  // using fill and map method 
  //console.log(arr7)

// Task 2 : Access the first and last element of the array 
let n = arr.length;
//console.log(arr[n-1])
//console.log(arr[0])

// ACTIVITY 2 : ARRAY METHODS (BASIC ):
 // TASK : 3  Use the push method to add a new number to the end of the array and log the updated array
   let Arr1 = [1,2,3,4,5];
  // console.log(Arr1)
   Arr1.push(12,12)
   //console.log(Arr1)

  // TASK 4:  Use the pop method to remove the last element from the array and log the updated array 
  Arr1.pop()
  //console.log(Arr1) 

// TASK5 : Use the shift method to remove the first element from the array and log the updated array 
  Arr1.shift() // To delete from the front 
  // console.log(Arr1)
  
// TASK 6 : Use the unshift method to add a new number to the begging of array and updted the log 
   Arr1.unshift(10,20 ) // to push from the front 
   //console.log(Arr1)  

// ACITIVITY 3 : ARRAY METHODS (INTERMEDIATE )

 // TASK 7 : Use the map method to create new array where each number is dobuled and log the new array
  let Arr2 = [10,20,30,40,50,99]
  let Arr3 = Arr2.map((e)=>{
           return e%2;
  })
  //console.log(Arr3)

  // TASK 8 : Use the filter method to create new  array with only even numbers and log the new array 

  let Arr4 = Arr2.filter(number =>number %2 ==0)
  console.log(Arr4)
 
  // TASK 9: Use the reduce method to calculate the sum of all numbers in the array and log the result 
  
   let Arr5 =  Arr2.reduce((callback,currentValue)=> callback+ currentValue ,0)

    console.log(Arr5)

// ACTIVITY 4 : ARRAY ITERATION 
  // Task 10 : Use a for loop to iterate over the array and log the each elemnt 

  for(let i = 0;i<Arr2.length;i++){
    // console.log(Arr2[i])
  }
  
  // Task 11 : Use the forEach for same 

  Arr2.forEach(element => {
    console.log(element)
  });

  // ACITVITY : 5 MULTI-DIMENSIONAL ARRAY 

   // TASK 12:  Create a 2d (martrix ) and log the entire array 
   let Arr6 =[[1,2,3],[4,5,6]]
   console.log(Arr6)

  Arr6.forEach(element => {
    console.log(element)
   });


   // Task 13 : Access and log a specific element from the 2d array : 2d learn 
   for(let i =0;i<3;i++){
    for(let j =0;j<3;j++){
      console.log(Arr6[i])
    }
   }