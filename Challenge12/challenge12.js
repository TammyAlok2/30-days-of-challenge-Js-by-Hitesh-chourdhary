  /**********Day 12 : Error Handling  */
   // ACITIVITY` 1 : BASIC ERROR HANDLINGAND TRY CATCH 

    // Task 1 : Write a function that intentionally throws an error and use a try catch block to handle the error and log an appropriate message 

    function task1(){
        try {
            let response =fetch('https://jsonplaceholder.com')
           console.log('response is ', response.json);

        } catch (error) {
            console.log(error)
        }
    }

    //task1()

    // Task 2 : Create a function that divides two numbers and throws an error if the denominator is zero . usee try catch block 

    function task2(number1,number2){
     if(number2 === 0){
        throw new Error('Error : Division by zero')

     }
     return number1/number2;

    }

    try {
        let number1 = 120;
        let number2 = 20;
        let division = task2(number1,number2)
        console.log("Result is " + division)
    } catch (error) {
        console.error(error.message)
    }


// ACTIVITY 2 : finally Block 

 // Task 3 : Write a script that includes a try catch block and finally block . log message in try catch 

   function task3(number1,number2){
    if(number1==0){
        throw new Error("Number is zero ")
    }
    return number1*number2
   }

   try {
    let number1 =0
    let number2 = 10
    let answer = number1*number2
    console.log('Muliply is ' + answer)

   } catch (error) {
    console.error(error.message)
   }
   finally{
console.log("finally result is " )
   }

   // ACTIVITY 4 : CUSTOM ERROR OBJECTS 
    // TASK 4: Creatt a custom error class that extends the built in error class. throw an instance of this custom error function and handle it using try catch block 
    class CustomError extends Error{
        constructor(message){
            super(message); // call the parent constructor
            this.name = "CustomError" // set the error 
        }
    }
    class CustomResponse extends Response{
        constructor(message){
            super(message);
            this.name = "Api Response"
        }
    }

 function doSomething(){
    throw new CustomError("this is custom error")
 }
 try {
    // Attempt to execute the risky function
    doSomething();
} catch (error) {
    // Handle the custom error
    if (error instanceof CustomError) {
        console.error("Caught a custom error:", error.message);
    } else {
        // Handle other types of errors
        console.error("Caught an unexpected error:", error);
    }
} finally {
    console.log("Execution completed, whether an error was thrown or not.");
}


  // ACTIVITY 4 : ERROR HANDLING IN PROMISES 
   // TASK 4 :  Write a function that validates user input and throws a custom error if the validation fails . handle custom error

   const login =(name,fatherName)=>{

    if(!name || !fatherName){
        throw new CustomError("Input all fields")
    }
    let result = {name,fatherName}
    return result

   }

   try {
    let name = "alok";
    let fatherName = "santhosh"
    let signin = login(name,fatherName)
    console.log(signin)
   } catch (error) {
    console.error(error.message)
   }

    // ACTIVITY 4 : ERROR HANDLING IN PROMISES 
     // TASK 6 : Create  a promise that randomly resolves or rejecsts . Use .catch() to handle the rejection and log an appropiate message the console 

     const task3Promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            let error =true 
            if (!error){
                resolve({ username: "alok", love: "ankita" });
            }
            else{
                reject("something went wrong ")
            }
        } ,1000)
    })

    task3Promise.then((user)=>{
        let data = user.username;
        return data
    }).then((data)=>{
        console.log('data is ' , data)
    }).catch((error)=>{
        console.log(error)
    })

    // Task 7 : user try-catch within an async function to handle errors from a promise that randomly resolves or rejects , and log the message 
    const promiseTask7 = new Promise(function(resolve,reject){
        let error = false ;
        if(!error){
            resolve({username:"alok ",love:"krishna"})
        }
        else{
            reject("something went wrong")
        }
    })

    async function resolvePromiseTask7 (){
        try {
            let response = await promiseTask7
            console.log(response) 
        } catch (error) {
            console.log(error)
        }

    }
    resolvePromiseTask7()

    // ACTIVITY 5 :  Graceful error handling in fetch 
      // task 8 : Use the fetch API to request data from an invalid url and handle the error usign .catch() .Log an appropriate error message to console 
      // task 9 : Use the fetch api to request data from aan invalid url withing an async function and handle the error try catch . log it 
      
async function getUsers(){
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/user/1')
      const data =  await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  getUsers()