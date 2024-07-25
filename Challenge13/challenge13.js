/********Day 13  : Modules ********************* */

// ACITIVITY 1 : Creating and Exporting modules 

// Task1: Create a module that exports a function of add two numbers , Import and use this module in another script

/*const {add} = require('./test');
const result = add(10,20)
console.log(result)



// Task 2 : Create a module that exports an objects representing a person with properties and methods . Import and use this moduel in another script

const {object} = require('./test.js')
const answer = object.greet() */


// ACTIVITY 2 : NAMED AND DEFAULT EXPORTS 

 // Task3 : Create a module that exports multiple functions using named exports . import and use these function in another script 
    
  /* const {add1,subtract1} = require ('./test2.js')
   const Addition = add1(10,20)
   console.log(Addition)*/
   
  // Task4 : Create a module that exports a single function using default export . Import and use this function in another script 
   import { multiply } from './test3.js';
   const mult = multiply(10,29)
   console.log(mult)


   // ACTIVITY 3  IMPORTING ENTIRE MODULES 
   import name from './TEST4.js'

    name("alok")