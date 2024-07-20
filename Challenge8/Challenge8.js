/************* Day : 8  ES6 + Features       *********** */

// ACITIVITY : 1 TEMPLATE LITERALS 
   // Task 1 : Use template literals to create a string that includes variable for person's name and age ,and log tthe string in teh console

    let name = "Ankita "
    let age =21 
    console.log(`My  name is ${name} and she is ${age}`)

    // Task 2 : create a multi-line string using template literals and console it 
    let name1 = "Alok "
    let age1 = 21 
    let address = "chennai"
    console.log(`my name is ${name1} 
        I am ${age1 } and my friend is ${name} and she is ${age1} we are staying in ${address} `)


// ACITIVITY 2: DESTRUCTURING 
  // tASK 3:  Use array destructuring to extract the first and second elements from an array of numbers and log them to consoel
  let arr =[1,2,3,4,5,6,7,8]
  let [a,b] = arr
  console.log(a,b)


  // task 4 : use object destructuring to extract the title and author from book object and log them 
  let arr1 = {
    title:"alok tamrkar",
    age:21,
    address:"Mangawan basti ",
    friend:"Ankita"

  }

  let {title,friend} = arr1
  console.log(title,friend)


  // ACTIVITY 4 : SPREAD AND REST OPERATOR
    // TASK 5: Use the spread operator to create a new array that includes all elements af an existing array plus additional elements , and log the new array 
    let arr2 = [1,2,3,4,5,6]
    let arr3 =[...arr2,8,9,10] // using spread opeartor to copy the elements 
    console.log(arr3)

    // Task 9 : Use the rest operator in a function to accept an arbitary number of arguments , sum them and return the result



let cart = function(...num1){
  let sum =0;
num1.forEach(element => {
     sum +=element;
  });
  console.log(sum)

}

cart(10,20)


// ACITIVITY 4 : DEFAULT PARAMETERS 
  // tASK 7: Write a function that takes two parameters and return their product , with the second paramete r having a default value of 1 log the result of calling this function with and withour second parameter 
  

  function multiply(one , two =5){
return one * two;
  }
  console.log(`Multiplication of two number is `, multiply(10,2 ))
  console.log(`Multiplication of two number is `, multiply(10 ))

// ACTIVITY 5 : ENHANCED OBJECT LITERALS 

  // Task 8 : Use enhanced object literals to create an object with methods and properties and log the console 

   let dog1 = " seru"
   let cat1 = 'meri'
   let age2=20

   let barks = function (){
    console.log('bark')
   }
   let anotherDog = {dog1,cat1,age2}
   anotherDog.barks()