// ACTIVITIY 1 : FOR LOOP 
 // Task 1 : Program to print from 1 to 100 
  for(let i =0;i<=100;i++){
   // console.log(i);
  }

  // Task 2 : multiplication of 5 table 
  for(let i = 1 ;i<=10 ;i++){
    //console.log(5*i);
  }

// ACITIVITY 2 : WHILE LOOP 
 // TASK3 : SUM OF NUMBER FROM 1 TO 10 
 let sum =0 ;
 let i =0
 while(i<=10){
 sum = sum +i;
 i++;
 }  
 //console.log(sum)

 // Task 4 : print number from 10 to 1 
 let num =10 
 while(num > 0){
   // console.log(num)
    num--;
 }

//ACITIVITY 3 : DO : WHILE LOOP 
 // Task 5 : PRINT NUMBER FROM 1 TO 5 

 let number = 1
 do {
    //console.log(number)
    number++;
 } while (number<=5);

 // Task 6 : find the factorial of given number 

 let number1 = 5;
 let factorial = 1;
 do {
  factorial = factorial*number1;
  number1--;
 } while (number1>0);
 //console.log(factorial)

 // ACTIVITY 4 NESTED LOOPS
  // Task 7 : print a pattern using nested for loops  // to learn 
  for(let i =1;i<=5;i++){
    for(let j =1;j<=5;j++){
   //   console.log( '*')
    }
   
  }

// ACTIVITY 5 LOOP CONTROL STATEMENTS 
  // Task 8 : Print number from 1 to 10 but skip the number using 5 using the continue 
  
  for(let i =1;i<10;i++){
    if(i==5)
      continue
    //console.log(i);
  }

  // Task 9 : print number 1 to 10 but stop when the number is 7 
  for(let i =1;i<10;i++){
    if(i==7) break;
    console.log(i)
  }