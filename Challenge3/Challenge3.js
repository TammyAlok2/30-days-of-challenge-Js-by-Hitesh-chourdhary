// ACTIVITY 1 : CONTROL STRUCTURES 
  // TASK 1: Write a program to check if a number is postive ,negatice or zero 
  let a = 10;
  if(a>0){
    console.log("Number is postive ");
  }
  else {
    console.log("number is negative ")
  }

  // Task 2 : program to check if a person is eliglible to vote or not 
  let age =20;
  if(age>=18){
    console.log("right to vote ")
  }
  else {
    console.log("not eligilbe to vote ")
  }

// ACITVITY 2 : NESTED IF ELSE STATEMENT
  // Task 3 : largest among three number 
  let d =10, b=29,c=20;
  if(d>=b && d>=c){
    console.log(d);

  }
  else if (b>=d && b>=c){
    console.log(b)
  }
  else {
     console.log(c)
  }

  // ACTIVITY 3 : SWITCH CASE 
   // Task 4: find the week from 1 to 5 
   let day =2 ;
   switch (day) {
    case 1:
        day="Sunday"
        break;
    case 2:
        day = "Monday"
        break;
    case 3 :
        day = "wednesday "
   
    default:
        break;
   }
   console.log(day)

   // Task 5 : find the grade 
   let grade = 1;
   switch (grade) {
    case 0:
        grade = "A"
        break;
    case 1: 
         grade = "B" 
         break;   
    case 2: 
         grade = "C"  
    default:
        break;
   }
   console.log(grade)

// ACTIVITY 4 : TERNARY OPERATOR 
  // Task 6 : check given number is even or odd    
  let number = 10
  console.log(number% 2 == 0 ? "even ": "odd")

// ACTIVITY 5 : COMBINING CONDITIONS 
 // Task 7 : Given year is leap year or not
let year = 2024 
if(year %4 ==0 &&year % 100 !=0  ){
    console.log("leap year")
} 
else if(year % 400 == 0){
    console.log("Leap year ")
} 
else {
    console.log("not leap year ")
}

// leap is divisible by 4 and 400 but not by 100