const promiseOne = new Promise(function (resolove, reject) {
  //Do an async task
  // Db calls ,cryptography ,network
  setTimeout(function () {
    resolove();
    console.log("Async task is completed");
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 ");
    resolve();
  });
}).then(function () {
  console.log("Async 2 resoloved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      username: "Chai",
      email: "Mylove@gmail.com",
    });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "alok", love: "ankita" });
    } else {
      reject("Error : SOmething went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  }).finally(()=>console.log("the promise is either resolve or rejected"))


  const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({ username: "alok", love: "ankita" });
          } else {
            reject("Error : SOmething went wrong");
          }
    },1000)
  });

async function consumePromiseFive(){
 try {
    const response =  await promiseFive
    console.log( 'response is ',response)
 } catch (error) {
    console.log(error)
 }
}
//consumePromiseFive()


async function getUsers(){
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data =  await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
//getUsers()

 function getAllUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
return response.json()
    }).then((data)=>{
        console.log(data)
    })
    .catch((error)=>{
        console.log(error)
    })
}
//getAllUsers()

// fetch pe 404 , aur status code response (resolve me aayega ) . wo error nahi hai Error tab hai jab network request na ho 


/************Day 11 : Promises and Async ? Swait  *******/

 // Acitivity 1 : understaning promises 
  // Task 1 : Create a promise that resolves with message after a 2 second timeout and log the message to console

  const taskPromise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve()
        console.log("This is first promise for task1 ")
    })
  }).then(function(){
    console.log("Task promise 1 resolved");
  })

   // Task 2 : Create a promise that rejets with an error message after 2 second teimout and handle the error using catch 

   const taskPromise2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
   if(!error){
    resolve()
   }
   else {
    reject("something went wrong")
   }
       
    },1000)
   })
   taskPromise2.then(function(){
    try {
      //  console.log("this is working task2 promise")
    } catch (error) {
      //  console.log(error)
    }
   }).finally(()=> console.log("task 2 promise completed "))


    // ACITIVITY 2  : CHAINIGN PROMISES 
    // Task 3 : create a sequence of promises that simulate fetching data from server chain the promises with log 

    const task3Promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            let error = false 
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
        console.log(data)
    }).catch((error)=>{
        console.log(error)
    })