/****DAY 15 : ClOUSURES  *** */

 // ACTITVITY 1 : UNDERSTANDING CLOUSURES 
  
    // Lexical Scoping : In lexical scoping Inner function can use the variable of parent function but parent can use child variables , child and child cannot use their variables 
       // this is called lexical scoping 


/*

    function outer(){
        let name = "alok tamrakar "
        function inner(){
            let secret = 123
            console.log("Ankita love ",name);
        }
        inner()
        function inner2(){
            console.log(name)
        }
        inner2()

    }
    outer()

    // closures : Return function from function with lexical scoping 
    function makeFunction(){
        const name = "alok tamrakr "
        function displayName(){
            console.log(name)
        }
        return displayName;
    }
    let name = makeFunction()
   name()
   */

   // TASK 1 : Write a function that returns another function , where the inner function accesses a variable from the outer function's scope . call the inner function and log the result 
function outer(){
    let name = "alok tamrakar "
    function inner(){
        console.log(name);
    }
   inner()
}
outer()
    
// Task 2 : Create a closure that maintains a private counter . Implement functions to increment and get the current value of the counter 
function counter(){
    let count =0;
    function increment(){
        count++;
        console.log(count);

    }
    increment()
}
counter()

 // ACTIVITY 2 : PRATICAL CLOUSURES 
  // TASK3 : Write a function that generates unique Ids . use a clousure to keep track of hte last generated id and increment it with each call 
  function generateId(){
    let id =parseInt(Math.random() * 100)
    function getId(){
        id++;
        console.log('id is ',id)
    }
    getId()

  }
  generateId()

   // Task 4 : create a closure that captures a user'name and returns a function that greets the user by name 

function name(name){
    function greet(){
        console.log(`hello ${name}`)
    }
    greet()
    
}
name("ankita")

// ACTIVITY 3 : cLOUSURES IN LOOPS 
// TASK 5 : Write a loop that creates an array of functions . each function should log its index when called. Use a clousere to ensure each function logs the correct index .

function createFunctions(){
    let functions = []
    for(let i=0;i<8;i++){
        functions.push(function(index){
            return function(){
                console.log(index)

            }
        })
    }
    return functions;
}
createFunctions()

// ACTIVITY 4 : MODULE PATTERN 
 // tASK 6 : Use clousures to create a simple module for managing a collection of items. Implement methods to add , remove , and list items 

 function itemManager(){
    let items =[]
    function addItem(item){
        items.push(item)
        console.log('item added')

    }
    function removeItem(item){
        let index = items.indexOf(item)
        if(index > -1){
            items.splice(index,1)
            console.log('item removed')
        }
    }
    function listItems(){
    console.log(items)
    }
    addItem("ghee ")
    return{
        addItem,removeItem,listItems
    }

 }

  //ACTIVITY 5 : MEMOIZATION 
   // TASK 7 : Write a function that memoizes the results of anther function . Use a clousure to store the results of previous computations
 