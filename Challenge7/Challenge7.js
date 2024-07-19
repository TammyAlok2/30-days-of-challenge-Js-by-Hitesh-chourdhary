// *****************************DAY 7 : OBJECTS ****************** 

// ACITIVITY : 1 OBJECT CREATION AND ACCESS 
  // TASK 1 : Create an object representing a book with properties like author, title and year and log the object to the console 
  /*
 There are two ways to declare a object 
 a) Constructor method 
 b ) Object literals 
  */

 // object literals 

  // to declare symbol 
 const mySym = Symbol("key1")
 let mySym2 = Symbol("key2 ")
  let obj = {
    name:"ALok Tamrakar",
    "full Name":"ALok kumar tamrakar",
    [mySym]:"alok",  // to declare symbol 
    [mySym2]:"tamrakar",
    age:20,
    email:"aloktamrakar2@gmail.com",
    isLoggedIn:false,
    loggedInDays:["Monday","Tuesday"],
    address:"Mangawan Basti "
   
   

  }

  
   //TASK 2 :  Access and log the title and author properties of the book object 
  // console.log(obj)
   //console.log(obj.full Name) not possible 
   //console.log(obj["full Name"]) // this is used to get 
  // console.log(obj["email"])
  // console.log(obj[mySym])  // to access the symbol 
  // console.log(typeof obj[mySym])   // symbol


   // to change the value and lock it 
   obj.email = "alok@gmail.com"
  //  Object.freeze(obj) to freeze the value so noone can change it 

  // to make function in the objectss
  obj.greeting =function(){
    console.log("hello this is me ")
  }

  obj.greeting2 =function(){
    console.log(`hello user ${this["full Name"]} `)
  }
  //obj.greeting2() // 
 // console.log(obj.greeting())


  // Constructor method to make object 
   const tinderUser = new Object() || {} // 
   console.log(tinderUser)

   tinderUser.id = 123
   tinderUser.name = "Alok tamrakar"
   tinderUser.gender = "Male "
   console.log(tinderUser)

   const obj1 = {name:'alok',class:'Btech '}
   const obj2 = {name:'ankita',class:"BALLB"}
   //const obj3 = {obj1,obj2}
   const obj3 = Object.assign({},obj1,obj2)
   console.log(obj3)
   console.log(obj3.name)

    


// ACTIVITY : 2 OBJECT METHODS 
   // TASK 3 : Add a method to the book object that returns a string with the book's title and author , and log the result of calling this method 
     const book = {title:"Atmoic Habits ", author:"James Clear",year:"1990",
      getBookInfo:function(){
        return`{ ${this.title} by ${this.author}}`
      },
      putYear:function(year){
        this.year = year
        return `{${this.year} in ${this.title}}`
      }
      
    }
     // console.log(book.getBookInfo())  
     //  console.log(book.putYear(2000))
   // TASK 4 : Add a method to the book object that takes a parameter (year ) and updates the book's yeaer property , then log the updated object
    console.log(book)

// ACTIVITY : 3 NESTED OBJECTS 
  // Task 5 : Create a nested object representing a library with properties like name and books (an array of book objects ) and log teh object to the console
  // Task 6 : Access and log the name of the library and the titles of all the books in the library 

  const library ={
    name:"Central Library ",
    Books : [{
      "name":"C++",
      "author":" Den and martin"
    },
    {
      "name":"java",
      "author":"Sen and martin"
    },
    
  ],
  

  }    

  console.log(library)
  console.log(library.Books[0].name)