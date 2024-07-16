// FEATURUES REQUREST  
  // 1 : Varibale Type Console.log : write a script that declares of different types datatype and logs both the value and each variable to console.
   
/*
Javascipt provides different datatypes to hold different types of values :
a) Primitive Datatype : String ,Number , Boolean , Undefined , Null 
b) Non - Primitive Datatype : Array , Object 

(IMP ) Difference btw Undefined and Null : 
Undefined and null are equal in value but different in type:

The typeof undefined is undefined

The typeof null is object

(null === undefined) is false

(null == undefined) is true

*/

let str = "hello world"
console.log(str)
console.log(typeof(str)); // string 

let number = 20 
console.log(number) 
console.log(typeof(number)) // number 

let bool = true
console.log(bool)
console.log(typeof(bool)) // boolean 

let num = undefined;
console.log(num)
console.log(typeof(num)) // underined 

let num1 = null ;
console.log(num1)
console.log(typeof(num1))// object 

let obj = {message:"hello"}
console.log(obj)
console.log(typeof(obj)) // object 

let arr = ["hello","this is me "]
console.log(arr)
console.log(typeof(arr)) // object 

let num4;
console.log(typeof(num4)) // undefined 

