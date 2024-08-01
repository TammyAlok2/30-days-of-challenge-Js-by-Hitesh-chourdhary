/******** DAY 20 : Local Storage and session storage  */

 // ACTIVITY 1: Understanding Local Storage 
  // Task 1: Write a script to save a string value to localstorage and retrive it .log the retrived value
function add(name,love){
    localStorage.setItem("name",`${name}`)
    localStorage.setItem("lover",`${love}`)
}
//add('alok','ankita')

 // task 2 : Write a script to save an object to localstorage by convertting it to a json string . Retrieve and parse the object 
 function addObject(object){
    localStorage.setItem("object",`${object}`)
 }
 let obj = {
    name:"alok tamrkar",
    love:"Ankita gupta"
 }
 //addObject(obj)


  // ACTIVITY 2: uSING LOCAL STORAGE 

 
