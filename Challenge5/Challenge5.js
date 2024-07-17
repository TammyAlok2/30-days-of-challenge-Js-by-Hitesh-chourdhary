// ACTIVITY 1 : FUNCTION DECLARATION : It declares with function keyword it has function name 
 // TASK 1 :  Write a function to check if a number is even or odd and console.log

 function evenOdd(number){
  //  (number%2==0 ? console.log(true) : console.log(false))
 }
 evenOdd(11)

 // Task 2 : Write a function to calculate the square of a number and return the result 
 function square(number){
    return number * number;
 }

 let answer = square(20)
// console.log(answer)

// ACTIVITY 2 : FUNCTION EXPRESSION : it is similar to declaration but doesn't have function name it is 
 // Task 3 : Write a function expression to find the maximum of two numbers and log the result
  let maxNumber = function(a,b){
   return a>b?a:b;
  }
  //console.log(maxNumber(10,20))

// find area, perimeter , 
let areaSquare = function (len,wid){
return len*wid;
}
//console.log(areaSquare(10,20))

let perimeterSquare = function (len,wid){
   return 2*(len+wid)
}
//console.log(perimeterSquare(10,20))

// Task 4 : function expression to concateneate two strings and return the result 

let strings = function (string1,string2){
   return string1 + string2;
}

//console.log(strings("hello Ankita", " how you "))

// ACTIVITY 3 : ARRAOW FUNCTIONS 
 // TASK 5 : Write an arrow function to calculate the sum of two numbers and return the result 
  let sum = (a,b)=>a,b; // 10
  //console.log(sum(10,20)) // 10 

  let mul= (a,b)=>a*b;
 // console.log(mul(10,20))

  let strings1 = (string1,string2)=> string1+string2;
  //console.log(strings1("Hello ","ankita"))

  //console.log(notHoisted); // undefined
 // notHoisted(); // TypeError: notHoisted is not a function
  // Even though the variable name is hoisted,
// the definition isn't. so it's undefined.


var notHoisted = function () {
  console.log("bar");
};


// taking all the parameters method like shopping carrt  using spread operator
let cart = function(...num1){
   let sum =0;
 num1.forEach(element => {
      sum +=element;
   });
   console.log(sum)

}
//cart(10,20,30) 

let cart1 = (val,...num)=>{
console.log(num)
}
//cart1(100,200)

// Task 6 : write an arrow function to check if a string contains a specific charcter and return a boolean value 
let check =(str)=>{
if(str.includes('a','i')){
   return true;
}
else {
   return false;
}

}
//console.log(check('aloki'))


// ACITIVITY 4 : FUNCTION PARAMETERS AND DEFAULT VALUES 
 // TASK 7 :  Write a function that takes two parameters and returns thieri product , provide a default value for second parameter 

 let multiply = (a,b=20)=> a * b;
 //console.log(multiply(10))


  // Task 8 : function that takes person's name and age and return greetings message and provide default value for age 
 let greetings = (name ,age =20)=>{
   console.log(`Hello Good morning ${name} and you are ${age} `)
 }

 //greetings("ALok Tamrakar" ,20)
 //greetings("Ankita Gupta ",20)

 // Activity 5 : Higher - Order Functions : A function which takes argument as function and gives output as function 
  // Task 9 : Write a higher order function that takes a function and a number , and calls the function that many times 
  let call = (fun,num)=>{
   for(let i =0;i<num;i++){
      fun()
   }
  }

  let fun =()=>{
  console.log("hello ") 
  }
//setTimeout(fun,4000)

  // Task 10 : Write a high order function that takes two function and a value , applies the first function to the value , and then applies the second function to the result 
  let apply = (fun1,fun2,val)=>{
   let result = fun1(val)
   fun2(result)
  }

  let fun1 = (val)=>{
console.log(`Hello I am ${val}`)
return val;
  }

  let fun2 = (val)=>{
   console.log(`Coding love ${val}`)
  }

  apply(fun1,fun2,"Alok")

