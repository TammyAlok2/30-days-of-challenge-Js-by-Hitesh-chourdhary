 /****Day 14 classes  */
  // Activity 1 : Class Definition 

   // Task 1 : Define a class person with properites name and age, and method to return a greeting message . Create an instance of the class and log the greeting message .
   class Person {
    constructor(name,age){
        this.name = name;
        this.age = age ;
    }
    person(age){
        this.age = age
        console.log("updated age is " + this.age)
    }
    greeting(){
        return (`i am ${this.name} and ${this.age}`)
    }
   

   }

   const person = new Person('Alok Tamrakar',20)
   console.log(person.greeting())
    person.person(29)


   // Task 2 :  Add a method to the person class that updates the age property and logs 

   // ACTIIVITY 2 : CLASS INHERITANCE 
    // TASK3 :   Define a class student that extends the person class . add a property studentId and a method to return the student id  . create a n instance of hte student class and log the student id 

    class Student extends Person{
        constructor(name,age,studentId){
            super(name,age);
            this.studentId = studentId
        }

        getStudentId(){
            return this.studentId;
        }
    }

    const student = new Student("alok tamrakar",20,'b2155')
    console.log(student.getStudentId())

    // Task 4 : override the greeting method in the student class to include the student id in the message . log the overrided greeting message 

    class Student1 extends Person{
        constructor(name,age,studentId){
            super(name,age)
            this.studentId =studentId
            Student1.count++;
        }
        // overiding greeting 
        greeting(){
            return `hello ${this.studentId}`
        }
        static greet(){
            return ("this is static method " + this.name)
        }
        static count =0
    }

    let student1 =new Student1("ankita",20,"bw233")
    console.log(student1.greeting())
    console.log(Student1.greet())
    console.log(Student1.count)


    // ACTIVITY 3 : STATICE METHODS AND PROPERTIES 
     // TASK 5 :  Add a static method to the person class that returns a generic greeting message . call this static method without creating an instance of the class and log the message 
      // answer is above 

      // Task 6 : Add a static property Student class to keep the track of no of hte students created . Increment this property in the constructor and log the total nu of studetns
 // answer is above 

 // ACTIVITY 4 : GETTERS AND SETTERS 
  // TASK 7 :  Add a getter method to the person class to return the full name . Create an instanc and log the full name using getter 
    

  class Student2 extends Person{
    constructor(name,age,studentId){
        super(name,age)
        this.studentId =studentId
        Student1.count++;
    }
    getName (){
        return this.name
    }
    setName(fullName){
        this.name = fullName
        return this.name
    }
    // overiding greeting 
    greeting(){
        return `hello ${this.studentId}`
    }
    static greet(){
        return ("this is static method " + this.name)
    }
    static count =0
}

let student2 = new Student2("ankita",20,"2343")
console.log(student2.getName())

// Task 8 : Add a setter method to the person class to update teh name properites . update the name using the setter and log the updated name 
let student3 = new Student2("ankita",20,"23324")
console.log(student3.setName("ankita gupta"))


 // ACTIVITY 5 : PRIVATE FIELDS (OPTIONAL )
  // TASK 9 : Define a class Amount with private fields for balance and method to deposit and withdraw money. Ensure that the balance can only only be updated throgh these methods 
   // tasj 10 : Create an instance of the account class and tesst teh deposit and withdrea method and log

  class Amount{
    // private field for balance 
    #balance ;
    constructor(intialBalance =0){
        this.#balance = intialBalance
    }

    // method to deposit money 
    deposit(amount){
        if(amount>0){
            this.#balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.#balance}.`);
        }

        else {
            console.log("Invalid withdraw amount.");
        }
    }

    withdraw(amount){
        if(amount> 0 && amount<=this.#balance){
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.#balance}.`);
        }
        else {
            console.log("Invalid withdraw amount.");
        }  
    }
    getBalance() {
        return this.#balance;
    }
  }

  const myAmount = new Amount(100); // Initialize with an initial balance of $100
console.log(`Initial balance: $${myAmount.getBalance()}`); // Log initial balance

myAmount.deposit(50); // Deposit $50
myAmount.withdraw(30); // Withdraw $30
myAmount.withdraw(150); // Attempt to withdraw $150 (invalid)

console.log(`Final balance: $${myAmount.getBalance()}`);